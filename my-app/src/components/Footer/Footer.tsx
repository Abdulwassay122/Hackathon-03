import React from 'react'
import Image from "next/image";
import twitter from "./assets/Frame (6).svg";
import facebook from "./assets/Vector (11).svg";
import youtube from "./assets/Frame (7).svg";
import insta from "./assets/Vector (12).svg";
import location from "./assets/Vector (13).svg";

export default function Footer() {
  return (
    <section className='bg-[#111111] px-[34px] flex flex-col gap-12 pb-5 text-white'>
        <div className='mt-10 flex md:flex-row flex-col md:gap-0 gap-10 justify-between'>
        <div className=' gap-4 items-start md:hidden flex '>
                    <Image src={twitter} alt="" />
                    <Image src={facebook} alt="" />
                    <Image src={youtube} alt="" />
                    <Image src={insta} alt="" />
            </div>
            <div className='flex sm:flex-row flex-col items-center gap-24'>
                <div className='flex flex-col gap-4'>
                    <p className='text-[10px] sm:text-left text-center'>Find A Store</p>
                    <p className='text-[10px] sm:text-left text-center'>Become A Member</p>
                    <p className='text-[10px] sm:text-left text-center'>Sign Up for Email</p>
                    <p className='text-[10px] sm:text-left text-center'>Send Us Feedback</p>
                    <p className='text-[10px] sm:text-left text-center'>Student Discounts</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-[10px] sm:text-left text-center'>Get Help</p>
                    <p className='text-[10px] text-[#7E7E7E] sm:text-left text-center'>Order Status</p>
                    <p className='text-[10px] text-[#7E7E7E] sm:text-left text-center'>Delivery</p>
                    <p className='text-[10px] text-[#7E7E7E] sm:text-left text-center'>Returns</p>
                    <p className='text-[10px] text-[#7E7E7E] sm:text-left text-center'>Payment Options</p>
                    <p className='text-[10px] text-[#7E7E7E] sm:text-left text-center'>Contact Us On Nike.com Inquiries</p>
                    <p className='text-[10px] text-[#7E7E7E] sm:text-left text-center'>Contact Us On All Other Inquiries</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-[10px] sm:text-left text-center'>About Nike</p>
                    <p className='text-[10px] text-[#7E7E7E] sm:text-left text-center'>News</p>
                    <p className='text-[10px] text-[#7E7E7E] sm:text-left text-center'>Careers</p>
                    <p className='text-[10px] text-[#7E7E7E] sm:text-left text-center'>Investors</p>
                    <p className='text-[10px] text-[#7E7E7E] sm:text-left text-center'>Sustainability</p>
                </div>
            </div>
            <div className=' gap-4 items-start md:flex hidden'>
                    <Image src={twitter} alt="" />
                    <Image src={facebook} alt="" />
                    <Image src={youtube} alt="" />
                    <Image src={insta} alt="" />
            </div>
        </div>

        <div className='flex justify-between md:flex-row flex-col md:gap-0 gap-3 '>
            <div className='flex gap-4 items-center'>
                <div className='flex gap-3'>
                    <Image src={location} alt="" />
                    <p className='text-[12px]'>India</p>
                </div>
                <p className='text-[11px] text-[#7E7E7E]'>© 2023 Nike, Inc. All Rights Reserved</p>
            </div>
            <div className='flex sm:gap-7 gap-2'>
                <p className='text-[12px] leading-3 text-[#7E7E7E]'>Guides</p>
                <p className='text-[12px] leading-3 text-[#7E7E7E]'>Terms of Sale</p>
                <p className='text-[12px] leading-3 text-[#7E7E7E]'>Terms of Use</p>
                <p className='text-[12px] leading-3 text-[#7E7E7E]'>Nike Privacy Policy</p>
            </div>
        </div>
    </section>
  )
}
