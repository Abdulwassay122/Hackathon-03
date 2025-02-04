"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Image from "next/image";
import nike from './assets/Image (6).svg'
import Link from 'next/link';
import spinner from './assets/Iphone-spinner-2.gif'
import { z } from 'zod';
import { LoginSchema } from '@/Schemas/LoginSchema';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import { useCartContext } from '../Contexts/CartContext';

export default function page() {
        // context
        const cartContext = useCartContext();
            if (!cartContext) {
              return <div>Loading...</div>;
            }
        const { setAuthToken } = cartContext;

        const router = useRouter();
        const[zoderror, setZoderror] = useState<z.ZodIssue[]>()
        const[loading, setLoading] = useState<boolean>()
        const[email, setEmail] = useState<string>()
        const[password, setPassword] = useState<string>()
        const[success, setSuccess] = useState<string>('')
        
      const handleEmail = (e:ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              };
      const handlePasseord = (e:ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          };

        async function onnSubmit(e: FormEvent<HTMLFormElement>){
          setZoderror([])
          setSuccess('')
          e.preventDefault();
          if (!email || !password) {
            setZoderror([{ message: 'Fill all the fields.', code: 'custom', path: ['fields'] }])
            setLoading(false)
            return;
            }
          
          try {
            const user = LoginSchema.parse({email, password})
            setLoading(true)
            const response = await fetch(`/api/auth/login`, {
              method:'POST',
              body:JSON.stringify(user)
            })

            const res = await response.json()
            if(response.status===202){
                setEmail('')
                setPassword('')
                setSuccess(res.message)
                setZoderror([])
                setLoading(false)
                toast.success("Verification Email Sent.", {
                  position: "bottom-left",
                  autoClose: 3000,
                });
            }
            if(response.status===200){
                setSuccess(res.message)
                setZoderror([])
                setLoading(false)
                setAuthToken(res.token)
                // localStorage.setItem('token',res.token)
                toast.success("Successfully Logged In.", {
                        position: "bottom-left",
                        autoClose: 3000,
                      });
                setTimeout(() => {
                  router.push('/')
                }, 3000);
            }else if(response.status !== 200 && response.status !== 202){
                console.error(res.message)
                setZoderror([{ message: res.message, code: 'custom', path: ['fields'] }])
                setLoading(false)
            }

            
          } catch (error) {
            if (error instanceof z.ZodError) {
              console.log(error.errors)
              setZoderror(error.errors)
              setLoading(false)
              } else {
              console.error('An unknown error occurred');
              setLoading(false)
            } 
          }
        }

  return (
    <section className='pb-[50px] flex justify-center'>
          <ToastContainer />
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col items-center gap-7'>
                <Image src={nike} alt="" />
                <p className='w-[180px] text-center font-bold text-[18px] leading-6'>YOUR ACCOUNT FOR EVERYTHING NIKE</p>
            </div>
            {loading? <div className='flex justify-center'><Image className='h-10 w-10' src={spinner} alt="" /></div>:''}
            <form onSubmit={onnSubmit} className='flex flex-col gap-6 items-center'>
                <div className='flex justify-center w-[310px]'>{success && success.length > 0 ? 
                        <p  className='text-[#56aa25] text-[14px]'>✅ { success }</p>
                    :''}</div>
                <div className='flex justify-center w-[310px]'>{zoderror && zoderror.length > 0 ? zoderror.map((ele,index)=>{return(
                    <p key={index} className='text-[#f14141] text-[14px]'>{ele.path[0] ==='fields'? ele.message:''}</p>
                )}):''}</div>
                <div className='flex flex-col gap-3'>
                <div>{zoderror && zoderror.length > 0 ? zoderror.map((ele,index)=>{return(
                    <p key={index} className='text-[#f14141] text-[12px] w-[310px]'>{ele.path[0] ==='email'? ele.message:''}</p>
                )}):''}
                    <input value={email} onChange={handleEmail} className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' placeholder='Email address' type="text" />
                    </div>
                    <div>{zoderror && zoderror.length > 0 ? zoderror.map((ele,index)=>{return(
                    <p key={index} className='text-[#f14141] text-[12px] w-[310px]'>{ele.path[0] ==='password'? ele.message:''}</p>
                )}):''}
                    <input value={password} onChange={handlePasseord} className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' placeholder='Password' type="password" />
                    </div>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <span className='flex items-center gap-4'><input className='h-5 w-5'  type="checkbox" /><label className='text-[12px] leading-3' htmlFor="input">Keep me signed in</label></span>
                    <p className='text-[12px] text-[#BCBCBC] hover:underline'>Forgotten your password?</p>
                </div>
                <p className='text-[12px] leading-4 text-center w-[270px] text-[#8D8D8D]'>By logging in, you agree to Nike&apos;s <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Use</span>.</p>
                <button type='submit' className='h-10 text-white text-[11px] leading-4 text-center bg-black w-full rounded-[3px]'>SIGN IN</button>
                <p className='text-[12px] leading-4 text-center w-[270px] text-[#8D8D8D]'>Not a Member? .<span className='text-black underline'><Link href="/joinus">Join Us</Link></span></p>
            </form>
        </div>
    </section> 
  )
}
