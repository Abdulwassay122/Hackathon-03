import React from 'react'
import Image from "next/image";
import nike from './assets/Image (6).svg'
import Link from 'next/link';

export default function JoinUs() {
  return (
    <section className='pb-[50px] flex justify-center'>
    <div className='flex flex-col gap-6'>
        <div className='flex flex-col items-center gap-7'>
            <Image src={nike} alt="" />
            <p className=' text-center font-bold text-[18px] leading-6'>BECOME A NIKE MEMBER</p>
            <p className='text-[14px] w-[282px] leading-[22px] text-center text-[#8D8D8D]'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
        </div>
        <div className='flex flex-col gap-6 items-center'>
            <div className='flex flex-col gap-3'>
                <input className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' placeholder='Email address' type="text" />
                <input className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' placeholder='Password' type="text" />
                <input className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' placeholder='First Name' type="text" />
                <input className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' placeholder='Last Name' type="text" />
                <input className='w-[324px] h-10 text-[14px] border-[1px] border-solid rounded-[3px] text-[#8D8D8D] px-4 border-[#E5E5E5]' placeholder='Date of Birth' type="date" />
                <p className='text-[12px] leading-4 text-center  text-[#8D8D8D]'>Get a Nike Member Reward every year on your Birthday.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <select className='w-[324px] h-10 text-[14px] text-[#8D8D8D] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' >
                    <option defaultChecked value="India">India</option>
                </select>
                <div className='flex justify-between'>
                <button className='w-[153px] text-[#8D8D8D] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' name='gender'>Male</button>
                <button className='w-[153px] text-[#8D8D8D] h-10 text-[14px] border-[1px] border-solid rounded-[3px] px-4 border-[#E5E5E5]' name='gender'>Female</button>
                </div> 
            </div>
            <div className='flex justify-between items-center w-full'>
                <span className='flex items-center gap-4'><input className='h-5 w-5'  type="checkbox" /><label className='text-[12px] leading-3 text-[#8D8D8D] w-[250px]' htmlFor="input">Sign up for emails to get updates from Nike on products, offers and your Member benefits</label></span>
            </div>
            <p className='text-[12px] leading-4 text-center w-[270px] text-[#8D8D8D]'>By creating an account, you agree to Nike&apos;s <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Use</span>.</p>
            <button className='h-10 text-white text-[11px] leading-4 text-center bg-black w-full rounded-[3px]'>JOIN US</button>
            <p className='text-[12px] leading-4 text-center w-[270px] text-[#8D8D8D]'>Already a Member? <span className='text-black underline'><Link href="/login">Sign In.</Link></span></p>
        </div>  
    </div>
</section> 
  )
}
