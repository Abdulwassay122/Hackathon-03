import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { client } from '@/sanity/lib/client';
import { cookies } from "next/headers";



export async function POST(req:NextRequest){

    const token = await req.json()
    const JWT_SECRET= process.env.JWT_SECRET
    
    try {
        if (!JWT_SECRET) {
            throw new Error("JWT secret is not defined");
        }
        const decoded = jwt.verify(token, JWT_SECRET)
        const { email } = decoded as jwt.JwtPayload
        console.log('Email :',email)
        const user = await client.fetch(`*[_type == "user" && email == $email][0]`, {email})

        if(!user) {
            return NextResponse.json({success:false, message:'Invalid Token'},{status:400})
        }
        
        const newToken = jwt.sign(
                    { id: user.userId, email: user.email },
                    JWT_SECRET,
                    { expiresIn: '30d' }
                  );

        await client.patch(user._id).set({isVerified:true}).commit()

        cookies().set({
            name: 'token',
            value: newToken ,
            httpOnly: true,
            secure:true,
            sameSite: "strict",
            path: '/',
            maxAge: 60 * 60 * 24 * 30
        })

        return NextResponse.json({success:true, message:'Email Verified Successfully.', token:newToken },{status:200})

    } catch (error) {
        return NextResponse.json({success:false, message:'Email Verification Failed', error},{status:500})
    }
}