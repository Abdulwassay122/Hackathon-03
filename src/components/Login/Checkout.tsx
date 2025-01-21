import React from 'react'
import Image from "next/image";
import nike from './assets/Group (2).svg'
import inbox from './assets/Auto Layout Horizontal.svg'
import bag from './assets/Frame (16).svg'
import check from './assets/Frame (17).svg'
import pic1 from './assets/Frame (18).svg'
import pic2 from './assets/Frame (19).svg'
import location from './assets/Frame (20).svg'
import img1 from './assets/Image (12).svg'
import img2 from './assets/Image (13).svg'
import img3 from './assets/Image (14).svg'
import img4 from './assets/Image (15).svg'
import img5 from './assets/Image (16).svg'
import img6 from './assets/Image (17).svg'
import img7 from './assets/Image (18).svg'
import img8 from './assets/Image (19).svg'
import img9 from './assets/Image (20).svg'
import img10 from './assets/Image (21).svg'
import img11 from './assets/Image (22).svg'
import Link from 'next/link';


export default function Checkout() {
  return (
    <section className='font-inter'>
        {/* header */}
        <div className='pl-[91px] flex justify-between h-[72.8px] items-center'>
            <Link href="/"><Image src={nike} alt="" /></Link>
            <div className='w-[249px] flex gap-10'>
                <p className='text-[14px] leading-6 text-[#111111] mr-[6px]'>000 800 100 9538</p>
                <Image src={inbox} alt="" />
                <Link href="/cart"><Image src={bag} alt="" /></Link>
            </div>
        </div>
        {/* body */}
        <div className='flex 1160:gap-[120px] gap-10 1400:pl-[289px] 1400:pr-[242px] lg:px-28 px-10 900:flex-row flex-col pb-[72px]'>
            <div className='flex flex-col gap-6 pb-[100px]'>
                <div className=' flex flex-col gap-3'>
                    <h3 className='text-[21px] leading-6'>How would you like to get your order?</h3>
                    <p className='text-[15px] text-[#757575] 450:w-[427px] leading-6'>Customs regulation for India require a copy of the recipient&quot;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>
                </div>
                <div className='flex items-center relative'>
                    <input className='w-[440px] border-2 border-solid rounded-xl border-black h-[82px] text-[15px] px-[69px] py-[29px] leading-6' placeholder='Deliver It' type="text" />
                    <Image className='absolute left-[21px]' src={check} alt="" />
                </div>
                <div className=''>
                    <h3 className='text-[21px] my-5 leading-6 font-[500]'>Enter your name and address:</h3>
                    <div className='flex flex-col gap-8 pb-8'>
                        <input className='450:w-[440px] h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='First Name' />
                        <input className='450:w-[440px] h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='Last Name' />
                        <input className='450:w-[440px] h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='Address Line 1' />
                        <input className='450:w-[440px] h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='Address Line 2' />
                        <input className='450:w-[440px] h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='Address Line 3' />
                        <span className='flex gap-4'>
                        <input className='450:w-[211px]  w-full h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='Postal Code' />
                        <input className='450:w-[211px] w-full  h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='Locality' />
                        </span>
                        <span className='flex gap-4'>
                        <select className='450:w-[211px] w-full h-[56px] text-[14px] text-[#8D8D8D] border-[1px] border-solid rounded-[4px] px-4 border-[#E5E5E5]' >
                            <option defaultChecked value="India">State/Territory</option>
                        </select>                      
                          <input className='450:w-[211px] w-full h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='India' />
                        </span>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <span className='flex gap-3 items-center'><input className='h-[18px] w-[18px]' type="checkbox" /><label className='text-[15px] leading-6 text-[#111111]' htmlFor="input">Save this address to my profile</label></span>
                        <span className='flex gap-3 items-center'><input className='h-[18px] w-[18px]' type="checkbox" /><label className='text-[15px] leading-6 text-[#111111]' htmlFor="input">Make this my preferred address</label></span>
                    </div>
                    <div>
                        <h4 className='text-[21px] leading-6 font-[500] my-5 '>What&quot;s your contact information?</h4>
                        <div className=''>
                        <input className='450:w-[440px] w-full h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='Email' />
                        <p className='text-[11px] text-[#757575] pl-4 leading-6'>A confirmation email will be sent after checkout.</p>
                        </div>
                        <div className=''>
                        <input className='450:w-[440px] w-full h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='Phone Number' />
                        <p className='text-[11px] text-[#757575] pl-4 leading-6'>A confirmation email will be sent after checkout.</p>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-[21px] leading-6 font-[500] my-5 '>What&quot;s your PAN?</h4>
                        <div className=''>
                        <input className='450:w-[440px] w-full h-[56px] pl-4 text-black rounded-[4px] text-[16px] leading-6 border-[1px] border-solid' type="text" placeholder='PAN' />
                        <p className='text-[11px] text-[#757575] pl-4 leading-6 450:w-[376px]'>Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
                        </div>
                        <span className='flex gap-3 items-center my-3'><input className='h-[18px] w-[18px]' type="checkbox" /><label className='text-[11px] leading-6 text-[#757575]' htmlFor="input">Save PAN details to Nike Profile</label></span>
                    </div>
                        <span className='flex gap-3 my-14 '><input className='h-[18px] w-[18px]' type="checkbox" /><label className='text-[11px] leading-6 text-[#757575] 450:w-[404px]' htmlFor="input">I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</label></span>
                        <button className='sm:w-[440px] w-[330px] h-[60px] bg-[#F5F5F5] rounded-full'>Continue</button>
                        <div className='flex flex-col gap-7 mt-7'>
                            <p className='text-[20px] leading-6 font-[500]'>Delivery</p>
                            <p className='text-[#757575] border-t-2 border-solid pt-5 text-[20px] leading-6 font-[500]'>Shipping</p>
                            <p className='text-[#757575] border-t-2 border-solid pt-5 text-[20px] leading-6 font-[500]'>Billing</p>
                            <p className='text-[#757575] border-t-2 border-solid pt-5 text-[20px] leading-6 font-[500]'>Payment</p>
                        </div>
                </div>
            </div>

            <div className='w-[320px] h-[721px]'>
                <h2 className='text-[20px] leading-6 font-[500] mt-5'>Order Summary</h2>
                <div className=''>
                    <div className='mt-3 gap-3 flex flex-col'>
                        <div>
                        <div className='flex justify-between h-[34px] items-center'>
                            <p className='text-[15px] text-[#8D8D8D] leading-4'>Subtotal</p>
                            <p className='text-[15px] text-[#8D8D8D] leading-4'>₹ 20 890.00</p>
                        </div>
                        <div className='flex justify-between h-[34px] items-center'>
                            <p className='text-[15px] text-[#8D8D8D] leading-4'>Subtotal</p>
                            <p className='text-[15px] text-[#8D8D8D] leading-4'>₹ 20 890.00</p>
                        </div>
                        </div>
                        <div className=''>
                        <div className='flex justify-between h-[54px] border-y-2 border-[#E5E5E5] border-solid items-center'>
                            <p className='text-[15px] font-[500] leading-4'>Subtotal</p>
                            <p className='text-[15px] font-[500] leading-4'>₹ 20 890.00</p>
                        </div>
                        </div>
                    </div>
                    <p className='text-[9px] leading-6 mt-[18px] mb-[26px]'>(The total reflects the price of your order, including all duties and taxes)</p>
                    <div className='h-[474px] flex flex-col gap-2'>
                        <h3 className='text-[15px] font-[700] leading-6'>Arrives Mon, 27 Mar - Wed, 12 Apr</h3>
                        <div className='h-[208px] flex gap-3'>
                            <Image src={pic1} alt="" />
                            <div className=''>
                                <p className='text-[13px] text-[#111111] leading-6'>Nike Dri-FIT ADV TechKnit Ultra Men&quot;s Short-Sleeve Running Top</p>
                                <p className='text-[13px] text-[#8D8D8D] leading-6'>Qty 1</p>
                                <p className='text-[13px] text-[#8D8D8D] leading-6'>Size L</p>
                                <p className='text-[13px] text-[#8D8D8D] leading-6'>₹ 3 895.00</p>
                            </div>
                        </div>
                        <div className='h-[208px] flex gap-3'>
                            <Image src={pic2} alt="" />
                            <div className=''>
                                <p className='text-[13px] text-[#111111] leading-6'>Nike Dri-FIT ADV TechKnit Ultra Men&quot;s Short-Sleeve Running Top</p>
                                <p className='text-[13px] text-[#8D8D8D] leading-6'>Qty 1</p>
                                <p className='text-[13px] text-[#8D8D8D] leading-6'>Size L</p>
                                <p className='text-[13px] text-[#8D8D8D] leading-6'>₹ 3 895.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* footer */}
        <div className='1160:h-[51px] h-full flex 1160:flex-row flex-col justify-between bg-[#111111] px-5'>
            <div className='flex items-center'>
                <div className='flex gap-6 items-center'>
                    <div className='flex items-center gap-2'>
                        <Image src={location} alt="" />
                        <p className='text-[9px] text-[#ffffff] leading-6'>India</p>
                    </div>
                    <div className='flex gap-4'>
                        <p className='text-[9px] text-[#8D8D8D] leading-6'>© 2023 NIKE, Inc. All Rights Reserved</p>
                        <p className='text-[9px] text-[#8D8D8D] leading-6'>Terms of Use</p>
                        <p className='text-[9px] text-[#8D8D8D] leading-6'>Terms of Sale</p>
                        <p className='text-[9px] text-[#8D8D8D] leading-6'>Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div className='flex sm:flex-nowrap flex-wrap gap-2'>
                <Image src={img1} alt="" />
                <Image src={img2} alt="" />
                <Image src={img3} alt="" />
                <Image src={img4} alt="" />
                <Image src={img5} alt="" />
                <Image src={img6} alt="" />
                <Image src={img7} alt="" />
                <Image src={img8} alt="" />
                <Image src={img9} alt="" />
                <Image src={img10} alt="" />
                <Image src={img11} alt="" />
            </div>
        </div>
    </section>
  )
}
