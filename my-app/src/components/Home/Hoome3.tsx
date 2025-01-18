import React from 'react'
import Image from "next/image";
import image from './assets/Image (3).svg'
import Link from 'next/link';

export default function Hoome3() {
  return (
    <section className='px-12 py-[84px] flex flex-col gap-12'>
        <div className='flex flex-col gap-[25px]'>
            <h4 className='text-[23px] leading-7 font-[500]'>Featured</h4>
            <Image className='w-full h-auto' src={image} alt="" />
        </div>
        <div className='flex flex-col gap-7 items-center'>
            <h1 className='sm:text-[54px] text-[34px] leading-[60px] text-center font-[500]'>STEP INTO WHAT FEELS GOOD</h1>
            <p className='text-[15px] leading-6 text-center'>Cause everyone should know the feeling of running in that perfect pair.</p>
            <Link href="/products/productbytag/Shoes"><button className='bg-black rounded-full text-white text-[15px] leading-6 text-center font-[500] w-[138px] h-[39px]'>Find Your Shoe</button></Link>
        </div>
    </section>
  )
}
