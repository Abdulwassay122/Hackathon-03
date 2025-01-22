import React from 'react'
import Image from "next/image";
import img from "./assets/Image.svg";
import Link from 'next/link';

export default function Hoome1() {
  return (
    <section className='w-full h-full pb-[84px]'>
      <div className='w-full h-[58px] bg-[#F5F5F5] flex flex-col items-center justify-center pt-[10px] '>
        <h3 className='text-[15px] leading-4 text-center font-semibold'>Hello Nike App</h3>
        <p className='text-[11px] leading-6 text-center'>Download the app to access everything Nike. Get Your Great</p>
      </div>
      <div className='px-4 w-full items-center flex flex-col gap-12'>
        <div>
            <Image src={img} alt="" />
        </div>
        <div className=' flex flex-col gap-6 items-center'>
            <div className='flex flex-col gap-1'>
            <p className='text-[15px] leading-6 text-center font-[500] '>First Look</p>
            <h1 className='sm:text-[56px] text-[36px] leading-[60px] font-[600] text-center'>Nike Air Max Pulse</h1>
            </div>
            <p className='text-[15px] leading-6 text-center font-[400] w-[360px]'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.</p>
            <div className='flex gap-2'>
                <button className='bg-black rounded-full text-white text-[15px] leading-6 text-center font-[500] w-[110px] h-[39px]'>Notify Me</button>
                <Link href="productdetail/NxaIkVf0z91aTr5xFoK6rf"><button className='bg-black rounded-full text-white text-[15px] leading-6 text-center font-[500] w-[138px] h-[39px]'>Shop Air Max</button></Link>
            </div>
        </div>
      </div>
    </section>
  )
}
