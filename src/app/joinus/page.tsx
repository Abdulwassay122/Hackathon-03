"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react'
import Image from "next/image";
import nike from './assets/Image (6).svg'
import spinner from './assets/Iphone-spinner-2.gif'
import Link from 'next/link';
import { UserSchema } from '@/Schemas/UserSchema';
import { z } from 'zod';
import { ToastContainer, toast } from "react-toastify";



export default function JoinUs() {
   
    const[zoderror, setZoderror] = useState<z.ZodIssue[]>()
    const[success, setSuccess] = useState<string>('')
    const[loading, setLoading] = useState<boolean>()
    const[name, setName] = useState<string>()
    const[email, setEmail] = useState<string>()
    const[password, setPassword] = useState<string>()
    const[gender, setGender] = useState<string>()
    const[date, setDate] = useState<string>()

    const handleEmail = (e:ChangeEvent<HTMLInputElement>) => {
          setEmail(e.target.value);
        };
    const handleName = (e:ChangeEvent<HTMLInputElement>) => {
          setName(e.target.value);
        };
    const handlePasseord = (e:ChangeEvent<HTMLInputElement>) => {
          setPassword(e.target.value);
        };
    const handleDate = (e:ChangeEvent<HTMLInputElement>) => {
          setDate(e.target.value);
        };
    const genderChange = (e:ChangeEvent<HTMLSelectElement>) => {
          setGender(e.target.value);
        };

        async function onSubmit (e: FormEvent<HTMLFormElement>){
            setSuccess('')
            setZoderror([])
            setLoading(true)
            e.preventDefault();

            if (!name || !email || !password || !date || !gender) {
            setZoderror([{ message: 'Fill all the fields.', code: 'custom', path: ['fields'] }])
            setLoading(false)
            return;
            }
            try {
                const user = UserSchema.parse({
                    name,
                    email,
                    password,
                    date,
                    gender
                })
                
                const response = await fetch('/api/auth/signup', {
                    method:"POST",
                    body:JSON.stringify(user)
                    });
                    const res = await response.json()

                    if(response.status===201){
                        setName('')
                        setEmail('')
                        setPassword('')
                        setDate('')
                        setGender('')
                        setZoderror([])
                        setLoading(false)
                        setSuccess(res.message)
                        // localStorage.setItem('token', res.token)
                        // setAuthToken(res.token)
                        toast.success("Veification Email Send.", {
                        position: "bottom-left",
                        autoClose: 3000,
                        })  
                        // setTimeout(() => {
                        //     router.push('/')
                        //   }, 3000);
                    }else{
                        console.error(res.message)
                        setZoderror([{ message: res.message, code: 'custom', path: ['fields'] }])
                        setLoading(false)
                    }
                
            } catch (error) {
                // return error.message
                if (error instanceof z.ZodError) {
                    console.log(error.errors)
                    setSuccess('')
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
            <p className=' text-center font-bold text-[18px] leading-6'>BECOME A NIKE MEMBER</p>
            <p className='text-[14px] w-[282px] leading-[22px] text-center text-[#8D8D8D]'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
        </div>
        {loading? <div className='flex justify-center'><Image className='h-10 w-10' src={spinner} alt="" /></div>:''}
        <form onSubmit={onSubmit} className='flex flex-col gap-6 items-center'>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-center'>{success && success.length > 0 ? 
                    <p  className='text-[#56aa25] text-[14px]'>✅ { success }</p>
                :''}</div>
                <div className='flex justify-center w-[330px]'>{zoderror && zoderror.length > 0 ? zoderror.map((ele,index)=>{return(
                    <p key={index} className='text-[#f14141] text-[14px]'>{ele.path[0] ==='fields'? ele.message:''}</p>
                )}):''}</div>
                <div>{zoderror && zoderror.length > 0 ? zoderror.map((ele,index)=>{return(
                    <p key={index} className='text-[#f14141] text-[12px]'>{ele.path[0] ==='email'? ele.message:''}</p>
                )}):''}
                <input className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' onChange={handleEmail} value={email} placeholder='Email address' type="email" />
                </div>
                <div>{zoderror && zoderror.length > 0 ? zoderror.map((ele,index)=>{return(
                    <p key={index} className='text-[#f14141] text-[12px]'>{ele.path[0] ==='password'? ele.message:''}</p>
                )}):''}
                <input className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' onChange={handlePasseord} value={password} placeholder='Password' type="password" />
                </div>
                <div>{zoderror && zoderror.length > 0 ? zoderror.map((ele,index)=>{return(
                    <p key={index} className='text-[#f14141] text-[12px]'>{ele.path[0] ==='name'? ele.message:''}</p>
                )}):''}
                <input className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' onChange={handleName} value={name} placeholder='Full Name' type="text" />
                </div>

                <input className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] text-[#8D8D8D] px-4 border-[#E5E5E5]' onChange={handleDate} value={date} placeholder='Date of Birth' type="date" />
                <p className='text-[12px] leading-4 text-center  text-[#8D8D8D]'>Get a Nike Member Reward every year on your Birthday.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <select aria-placeholder='Gender' onChange={genderChange} value={gender} className='w-[324px] h-10 text-[14px] text-[#8D8D8D] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' >
                    <option className='py-4'>Gender</option>  
                    <option className='py-4' value="male">Male</option>  
                    <option className='py-4' value="female">Female</option>
                </select>
                {/* <div className='flex justify-between'>
                <button className='w-[153px] text-[#8D8D8D] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' name='gender'>Male</button>
                <button className='w-[153px] text-[#8D8D8D] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' name='gender'>Female</button>
                </div>  */}
            </div>
            <div className='flex justify-between items-center w-full'>
                <span className='flex items-center gap-4'><input className='h-5 w-5'  type="checkbox" /><label className='text-[12px] leading-3 text-[#8D8D8D] w-[250px]' htmlFor="input">Sign up for emails to get updates from Nike on products, offers and your Member benefits</label></span>
            </div>
            <p className='text-[12px] leading-4 text-center w-[270px] text-[#8D8D8D]'>By creating an account, you agree to Nike&apos;s <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Use</span>.</p>
            <button type='submit' className='h-10 text-white text-[11px] leading-4 text-center bg-black w-full rounded-[3px]'>JOIN US</button>
            <p className='text-[12px] leading-4 text-center w-[270px] text-[#8D8D8D]'>Already a Member? <span className='text-black underline'><Link href="/login">Sign In.</Link></span></p>
        </form>  
    </div>
</section> 
  )
}
