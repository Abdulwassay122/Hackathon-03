import React from 'react'
import Image from "next/image";
import pic1 from './assets/Frame (13).svg';
import wishlist from './assets/Frame (14).svg';
import deletee from './assets/Frame (15).svg'
import Link from 'next/link'
export default function Cart() {
  return (
    <section className='pt-10 pb-[85px] xl:pl-[198px] sm:pl-[48px]  px-10 xl:pr-[115px] sm:pr-[48px] flex 1160:flex-row flex-col sm:gap-2 gap-10 font-inter'>
        <div className='flex flex-col gap-4'>
            <div className='bg-[#F7F7F7] h-[63px] flex flex-col gap-1 px-2 pt-[14px] pb-[7px] w-full pl-2'>
                <h4 className='text-[13px] leading-[14px] font-[500]'>Free Delivery</h4>
                <div>
                    <p className='text-[11px] leading-[24px]'>Applies to orders of ₹ 14 000.00 or more.</p>    
                    <p className='text-[11px] leading-[24px] underline'></p>
                </div>
            </div>
            <div className=''>
              <h2 className='text-[22px] leading-[33px] font-[500]'>Bag</h2>
              <div className='md:w-[717px] sm:h-[218px] flex items-center border-b-[1px] border-solid'>
                <div className='sm:h-[170px] flex sm:flex-row flex-col sm:gap-[30px]'>
                    <Image src={pic1} alt="" />
                    <div className='flex sm:flex-row flex-col gap-4 justify-between sm:w-[537px] pt-2'>
                      <div className=''>
                          <p className='text-[15px] leading-7'>Nike Dri-FIT ADV TechKnit Ultra</p>
                          <p className='text-[15px] text-[#757575] leading-7'>Men&quot;s Short-Sleeve Running Top</p>
                          <p className='text-[15px] text-[#757575] leading-7'>Ashen Slate/Cobalt Bliss</p>
                          <div className='flex gap-12'>
                          <div className='text-[15px] text-[#757575] leading-7'>Size <span className='ml-[10px]'>L</span></div>
                          <p className='text-[15px] text-[#757575] leading-7'>Quantity <span className='ml-[10px]'>1</span></p>
                          </div>
                          <div className='flex gap-4 mt-6'>
                              <Image src={wishlist} alt="" />
                              <Image src={deletee} alt="" />
                          </div>
                      </div>
                        <p className='text-[15px] text-[#111111] leading-7'>MRP: ₹ 3 895.00</p>
                    </div>
                </div>
              </div>
              <div className='md:w-[717px] sm:h-[218px] flex items-center border-b-[1px] border-solid'>
                <div className='sm:h-[170px] sm:flex-row flex-col flex sm:gap-[30px]'>
                    <Image src={pic1} alt="" />
                    <div className='flex gap-4 sm:flex-row flex-col justify-between sm:w-[537px] pt-2'>
                      <div className=''>
                          <p className='text-[15px] leading-7'>Nike Air Max 97 SE</p>
                          <p className='text-[15px] text-[#757575] leading-7'>Men&quot;s Shoes</p>
                          <p className='text-[15px] text-[#757575] leading-7'>Flat Pewter/Light Bone/Black/White</p>
                          <div className='flex gap-12'>
                          <p className='text-[15px] text-[#757575] leading-7'>Size <span className='ml-[10px]'>8</span></p>
                          <p className='text-[15px] text-[#757575] leading-7'>Quantity <span className='ml-[10px]'>1</span></p>
                          </div>
                          <div className='flex gap-4 mt-6'>
                              <Image src={wishlist} alt="" />
                              <Image src={deletee} alt="" />
                          </div>
                      </div>
                        <p className='text-[15px] text-[#111111] leading-7'>MRP: ₹ 16 995.00</p>
                    </div>
                </div>
              </div>
            </div>
        </div>

        <div className='sm:w-[350px] h-[295px] flex flex-col gap-6 ml-2'>
          <h1 className='text-[22px] leading-[33px] font-[500] '>Summary</h1>
          <div className='flex flex-col gap-2'>
            <div className="flex justify-between"> 
              <p className='text-[15px] text-[#111111] leading-7'>Subtotal</p>
              <p className='text-[15px] text-[#111111] leading-7'>₹ 20 890.00</p>
            </div>
            <div className="flex justify-between"> 
              <p className='text-[15px] text-[#111111] leading-7'>Estimated Delivery & Handling</p>
              <p className='text-[15px] text-[#111111] leading-7'>Free</p>
            </div>
          </div>
          <div className='flex justify-between h-[62px] items-center border-solid border-y-[1px]'>
            <p className='text-[15px] text-[#111111] leading-7'>Total</p>
            <p className='text-[15px] text-[#111111] leading-7'>₹ 20 890.00</p>
          </div>
          <Link href="/checkout"><button className='sm:w-[334px] w-[300px] h-[60px] rounded-full mt-2 ml-2 bg-black text-[15px] text-[#ffffff] leading-7'>Member Checkout</button></Link>
        </div>
    </section>
  )
}
