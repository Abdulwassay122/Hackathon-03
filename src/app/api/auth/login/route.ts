import { client } from "@/sanity/lib/client";
import bcrypt from 'bcrypt';
import  jwt  from 'jsonwebtoken';
import { z } from "zod";
import nodemailer from "nodemailer";
import { LoginSchema } from "@/Schemas/LoginSchema";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
require('dotenv').config();

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET as string;

export async function POST (req:NextRequest){
    
    const body = await req.json()

    const validateData = LoginSchema.parse(body) 

    const{email, password} = validateData

    try {
        // Fetch User from sanity
        const user = await client.fetch(
            `*[_type == "user" && email == $email][0]`,
            { email }
          );

        if(!user){
            return NextResponse.json({success:false, message:'User Not Found !'}, {status:404})
        }
        // validate user by comparing password
        const isValid = await bcrypt.compare(password, user.password)
        
        if (!isValid) {
            return NextResponse.json({success:false, message:'Invalid Credentials'}, {status:401})
        }
        
        if(user.isVerified === false){
        
            const token = jwt.sign(
                { id: user.userId, email: user.email },
                JWT_SECRET,
                { expiresIn: '1h' }
              );
            const transpoter = nodemailer.createTransport({
                service:"gmail",
                secure:true,
                port:465,
                auth:{
                    user:"awassay122598@gmail.com",
                    pass:"ifyc stul fzmw brvk",
                },
            })  
            const mailOptions = {
                from:process.env.EMAIL,
                to:email,
                subject:`Verify Your Email`,
                html:`<p>Click <a href="${process.env.NEXT_PUBLIC_FRONTEND_URL}/verify?token=${token}">here</a> to verify your email.</p>`
            } 
            await transpoter.sendMail(mailOptions)

            return NextResponse.json({success:true, message:'Verification email sent. Please check your inbox to verify your account.'}, {status:202})

        }

        const token = jwt.sign(
            { id: user.userId, email: user.email },
            JWT_SECRET,
            { expiresIn: '30d' }
          );
         cookies().set({
            name: 'token',
            value: token,
            httpOnly: true,
            secure:true,
            sameSite: "strict",
            path: '/',
            maxAge: 60 * 60 * 24 * 30
        })
        return NextResponse.json({success:true, message:'Login Successfull', token}, {status:200})
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {success:false, message: "Validation Error", errors: error.errors }, // Send detailed validation errors
                { status: 400 }
            );
        }
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            {success:false, message: `Error Creating User: ${errorMessage}` },
            { status: 500 }
        );
    }

}