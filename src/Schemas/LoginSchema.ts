import {z} from 'zod'

export const LoginSchema = z.object({
    email:z.string()
    .email({message:'Invalid Email !'}),
    password:z.string()
    .min(6,{message:'Password should atleast 6 characters long.'})
    .max(20,{message:'Password should not be more than 20 characters.'})
})