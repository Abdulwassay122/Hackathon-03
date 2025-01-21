import React from 'react'
import Image from "next/image";
import nike from './assets/Image (6).svg'
import Link from 'next/link';

export default function Login() {
  return (
    <section className='pb-[50px] flex justify-center'>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col items-center gap-7'>
                <Image src={nike} alt="" />
                <p className='w-[180px] text-center font-bold text-[18px] leading-6'>YOUR ACCOUNT FOR EVERYTHING NIKE</p>
            </div>
            <div className='flex flex-col gap-6 items-center'>
                <div className='flex flex-col gap-3'>
                    <input className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' placeholder='Email address' type="text" />
                    <input className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' placeholder='Password' type="text" />
                </div>
                <div className='flex justify-between items-center w-full'>
                    <span className='flex items-center gap-4'><input className='h-5 w-5'  type="checkbox" /><label className='text-[12px] leading-3' htmlFor="input">Keep me signed in</label></span>
                    <p className='text-[12px] text-[#BCBCBC] hover:underline'>Forgotten your password?</p>
                </div>
                <p className='text-[12px] leading-4 text-center w-[270px] text-[#8D8D8D]'>By logging in, you agree to Nike&apos;s <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Use</span>.</p>
                <button className='h-10 text-white text-[11px] leading-4 text-center bg-black w-full rounded-[3px]'>SIGN IN</button>
                <p className='text-[12px] leading-4 text-center w-[270px] text-[#8D8D8D]'>Not a Member? .<span className='text-black underline'><Link href="/joinus">Join Us</Link></span></p>
            </div>
        </div>
    </section>  
  )
}
