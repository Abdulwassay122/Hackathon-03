import React from 'react'
import Image from "next/image";
import pic1 from '@/components/Login/assets/Frame (13).svg';
import wishlist from '@/components/Login/assets/Frame (14).svg';
import deletee from '@/components/Login/assets/Frame (15).svg'
import Link from 'next/link'
import Navbar from '@/components/Header/Navbar';
import Footer from '@/components/Footer/Footer';
export default function page() {
  return (
    <>
    <Navbar/>
    <section className='pt-10 pb-[85px] xl:pl-[198px] sm:pl-[48px]  px-10 xl:pr-[115px] sm:pr-[48px] flex 1160:flex-row flex-col sm:gap-2 gap-10 font-inter'>
        <div className='flex flex-col gap-4 w-full'>
            <div className='bg-[#F7F7F7] h-[63px] flex flex-col gap-1 px-2 pt-[14px] pb-[7px] w-full pl-2'>
                <h4 className='text-[13px] leading-[14px] font-[500]'>Orders Detail</h4>
                <div>
                    <p className='text-[11px] leading-[24px]'>See your order is dispatched arrived or delivered.</p>    
                    <p className='text-[11px] leading-[24px] underline'></p>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
              <h2 className='text-[22px] leading-[33px] font-[500]'>Orders</h2>
              <div className='md:w-full sm:h[218px] flex items-center border-b-[1px] border-solid'>
                <div className='sm:h[170px] pb-8 w-full flex sm:flex-row flex-col sm:gap-[30px]'>
                    <Image className='w-[300px] h-[300px]' src={pic1} alt="" />
                    <div className='flex lg:flex-row flex-col gap-4 justify-between sm:w-full pt-2'>
                      <div className='flex flex-col gap-2'>
                          <p className='text-[15px] leading-7'>Nike Dri-FIT ADV TechKnit Ultra</p>
                          <p className='text-[15px] text-[#757575] leading-7'>Men&quot;s Short-Sleeve Running Top</p>
                          <p className='text-[15px] text-[#757575] leading-7'>Ashen Slate/Cobalt Bliss</p>
                          <div className='flex flex-col gap-2'>
                          <div className='text-[15px] text-[#757575] leading-7'>Size <span className='ml-[10px]'>L</span></div>
                          <p className='text-[15px] text-[#757575] leading-7'>Quantity <span className='ml-[10px]'>1</span></p>
                          <p className='text-[15px] text-[#757575] leading-7'>Color <span className='ml-[10px]'>White</span></p>
                          </div>
                          {/* <div className='flex gap-4 mt-6'>
                              <Image src={wishlist} alt="" />
                              <Image src={deletee} alt="" />
                              </div> */}
                        <p className='text-[15px] text-[#111111] leading-7'>MRP: ₹ 3 895.00</p>
                              <p className='text-[18px] leading-7'>Status <span className='ml-[10px]'>Dispatched</span></p>
                      </div>
                      <div className=''>
                      <p className='text-[15px] leading-7'>Order Placed<span className='ml-[10px]'>1/2/2025</span></p>
                      <p className='text-[15px] leading-7'>Estimated Delivery<span className='ml-[10px]'>1/2/2025</span></p>
                      </div>
                    </div>
                </div>
              </div>
              <div className='md:w-full sm:h[218px] flex items-center border-b-[1px] border-solid'>
                <div className='sm:h[170px] pb-8 w-full flex sm:flex-row flex-col sm:gap-[30px]'>
                    <Image className='w-[300px] h-[300px]' src={pic1} alt="" />
                    <div className='flex lg:flex-row flex-col gap-4 justify-between sm:w-full pt-2'>
                      <div className='flex flex-col gap-2'>
                          <p className='text-[15px] leading-7'>Nike Dri-FIT ADV TechKnit Ultra</p>
                          <p className='text-[15px] text-[#757575] leading-7'>Men&quot;s Short-Sleeve Running Top</p>
                          <p className='text-[15px] text-[#757575] leading-7'>Ashen Slate/Cobalt Bliss</p>
                          <div className='flex flex-col gap-2'>
                          <div className='text-[15px] text-[#757575] leading-7'>Size <span className='ml-[10px]'>L</span></div>
                          <p className='text-[15px] text-[#757575] leading-7'>Quantity <span className='ml-[10px]'>1</span></p>
                          <p className='text-[15px] text-[#757575] leading-7'>Color <span className='ml-[10px]'>White</span></p>
                          </div>
                          {/* <div className='flex gap-4 mt-6'>
                              <Image src={wishlist} alt="" />
                              <Image src={deletee} alt="" />
                              </div> */}
                        <p className='text-[15px] text-[#111111] leading-7'>MRP: ₹ 3 895.00</p>
                              <p className='text-[18px] leading-7'>Status <span className='ml-[10px]'>Arrived</span></p>
                      </div>
                      <div className=''>
                      <p className='text-[15px] leading-7'>Order Placed<span className='ml-[10px]'>1/2/2025</span></p>
                      <p className='text-[15px] leading-7'>Estimated Delivery<span className='ml-[10px]'>1/2/2025</span></p>
                      </div>
                    </div>
                </div>
              </div>
              <div className='md:w-full sm:h[218px] flex items-center border-b-[1px] border-solid'>
                <div className='sm:h[170px] pb-8 w-full flex sm:flex-row flex-col sm:gap-[30px]'>
                    <Image className='w-[300px] h-[300px]' src={pic1} alt="" />
                    <div className='flex lg:flex-row flex-col gap-4 justify-between sm:w-full pt-2'>
                      <div className='flex flex-col gap-2'>
                          <p className='text-[15px] leading-7'>Nike Dri-FIT ADV TechKnit Ultra</p>
                          <p className='text-[15px] text-[#757575] leading-7'>Men&quot;s Short-Sleeve Running Top</p>
                          <p className='text-[15px] text-[#757575] leading-7'>Ashen Slate/Cobalt Bliss</p>
                          <div className='flex flex-col gap-2'>
                          <div className='text-[15px] text-[#757575] leading-7'>Size <span className='ml-[10px]'>L</span></div>
                          <p className='text-[15px] text-[#757575] leading-7'>Quantity <span className='ml-[10px]'>1</span></p>
                          <p className='text-[15px] text-[#757575] leading-7'>Color <span className='ml-[10px]'>White</span></p>
                          </div>
                          {/* <div className='flex gap-4 mt-6'>
                              <Image src={wishlist} alt="" />
                              <Image src={deletee} alt="" />
                              </div> */}
                        <p className='text-[15px] text-[#111111] leading-7'>MRP: ₹ 3 895.00</p>
                              <p className='text-[18px] leading-7'>Status <span className='ml-[10px] text-green-300'>Delivered</span></p>
                      </div>
                      <div className=''>
                      <p className='text-[15px] leading-7'>Order Placed<span className='ml-[10px]'>1/2/2025</span></p>
                      <p className='text-[15px] leading-7'>Estimated Delivery<span className='ml-[10px]'>1/2/2025</span></p>
                      </div>
                    </div>
                </div>
              </div>
              
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}
