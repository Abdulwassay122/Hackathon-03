import React from 'react'
import Image from "next/image";
import img1 from "./assets/Frame (3).svg";
import img2 from "./assets/Frame (4).svg";
import img3 from "./assets/Frame (5).svg";
import Link from 'next/link';

export default function Hoome6() {
  return (
    <section className='sm:px-[42px] px-3 flex flex-col gap-[84px]'>
        <div className='flex flex-col gap-6 overflow-hidden'>
            <h3 className='text-[23px] leading-7 font-[500]'>The Essentials</h3>
            <div className='pl-[6px] flex md:flex-row flex-col gap-3 items-center 1400:overflow-visible overflow-x-auto justify-between'>
                <Link href="/products/productbytag/Men's"><Image src={img1} alt="" /></Link>
                <Link href="/products/productbytag/Women's"><Image src={img2} alt="" /></Link>
                <Link href="/products"><Image src={img3} alt="" /></Link>
            </div>
        </div>
        <div className='sm:px-[232px] px-10 pb-[56px] flex lg:flex-row flex-col items-center justify-between'>
            <div className='w-[184px] flex flex-col gap-6'>
                <p className='text-[15px] leading-6 font-[500] lg:text-left text-center'>Icons</p>
                <div className='flex flex-col gap-3'>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Air Force 1</p>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Huarache</p>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Air Max 90</p>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Air Max 95</p>
                </div>
            </div>
            <div className='w-[184px] flex flex-col gap-6'>
                <p className='text-[15px] leading-6 font-[500] lg:text-left text-center'>Shoes</p>
                <div className='flex flex-col gap-3'>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>All Shoes</p>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Custom Shoes</p>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Jordan Shoes</p>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Running Shoes</p>
                </div>
            </div>
            <div className='w-[184px] flex flex-col gap-6'>
                <p className='text-[15px] leading-6 font-[500] lg:text-left text-center'>Clothing</p>
                <div className='flex flex-col gap-3'>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>All Clothing</p>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Modest Wear</p>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Hoodies & Pullovers</p>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Shirts & Tops</p>
                </div>
            </div>
            <div className='w-[184px] flex flex-col gap-6'>
                <p className='text-[15px] leading-6 font-[500] lg:text-left text-center'>Kid&quot;s</p>
                <div className='flex flex-col gap-3'>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Infant & Toddler Shoes</p>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Kid&quot;s Shoes</p>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Kid&quot;s Jordan Shoes</p>
                    <p className='text-[15px] leading-6 font-[500] lg:text-left text-center text-[#757575]'>Kid&quot;s Basketball Shoes</p>
                </div>
            </div>
        </div>
    </section>
  )
}
