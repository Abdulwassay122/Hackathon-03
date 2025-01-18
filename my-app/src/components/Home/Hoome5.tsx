import React from 'react'
import Image from "next/image";
import image from "./assets/Image (5).svg";
import Link from 'next/link';

export default function Hoome5() {
  return (
    <section className='py-[84px] px-12 flex flex-col gap-12'>
      <div className='flex flex-col gap-6'>
        <h2 className='text-[22px] leading-7 font-[500]'>Don&quot;t Miss</h2>
        <Image className='w-full h-auto' src={image} alt="" />
      </div>
      <div className='flex flex-col gap-7 items-center'>
            <h1 className='sm:text-[52px] text-[36px] leading-[60px] text-center font-[500]'>FLIGHT ESSENTIALS</h1>
            <p className='text-[15px] leading-6 text-center'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
            <Link href="/products"><button className='bg-black rounded-full text-white text-[15px] leading-6 text-center font-[500] w-[80px] h-[39px]'>Shop</button></Link>
        </div>
    </section>
  )
}
