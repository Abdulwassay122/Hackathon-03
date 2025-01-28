import { client } from '@/sanity/lib/client';
import { UserSchema } from '@/Schemas/UserSchema';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import  jwt  from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

import { NextRequest, NextResponse } from 'next/server';

const userId = uuidv4();
const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET as string;

export async function POST (req: NextRequest){

    const body = await req.json()

    // Validating 
    const validateData = UserSchema.parse(body) 

    const{email, password, name, date, gender} = validateData

    const salt = await bcrypt.genSalt(11)

    const hashedPassword = await bcrypt.hash(password, salt)
    try {    
    
        // Check that user already exiists with the eamil
        const existingUser = await client.fetch(`*[_type == 'user' && email == $email][0]`,{email})
        if(existingUser){
            return NextResponse.json({success:false, message:'User With this email Already Exsist!'},{status:400})
        }

        // create new user 
        const newUser = await client.create({
            _type: 'user',
            userId,
            name,
            email,
            password:hashedPassword,
            gender,
            DOB:date,
        })
        const user = {userId, email}
        const token = jwt.sign(
            { id: user.userId, email: user.email },
            JWT_SECRET,
            { expiresIn: '90d' }
          );
        return NextResponse.json({success:true, message:'User create Successfully', token },{status:201})
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