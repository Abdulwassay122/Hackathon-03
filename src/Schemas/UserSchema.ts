import {z} from 'zod'

export const UserSchema = z.object({
    name:z.string()
    .min(3,{message:'Name must be atleat 3 characters long.'})
    .max(20,{message:'Name must not longer than 14 characters.'}),
    email:z.string()
    .email({message:'Invalid Email !'}),
    password:z.string()
    .min(6,{message:'Password should atleast 6 characters long.'})
    .max(20,{message:'Password should not be more than 20 characters.'}),
    date:z.string(),
    gender:z.enum(['male','female'])
})