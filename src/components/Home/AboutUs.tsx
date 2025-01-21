import React from 'react'
import Image from "next/image";
import search from './assets/Vector (14).svg'
import like from './assets/Frame (11).svg'
import dislike from './assets/Frame (12).svg'
import phone from './assets/Image (7).svg'
import sms from './assets/Image (8).svg'
import mail from './assets/Image (9).svg'
import locaton from './assets/Image (11).svg'

export default function AboutUs() {
  return (
    <section className='py-12 sm:px-[87px] px-[37px] 1320:flex flex-col gap-12'>
        <div className='flex flex-col gap-5 items-center'>
            <h1 className='text-[32px] leading-9 font-[500] text-center'>GET HELP</h1>
            <div className='relative flex items-center'>
                <input className='py-5 pl-3 border-[1px] border-solid rounded-[8px] text-[15px] sm:w-[457px] w-[350px]' placeholder='What can we help you with?' type="text" />
                <Image className='absolute right-5' src={search} alt="" />
            </div>
        </div>

        <div className='flex 1320:flex-row flex-col 1320:gap-0 gap-5'>
            <div className='flex flex-col gap-8 border-solid pr-7 1320:border-r-[1px] '>
                <h1 className='text-[28px] leading-8 font-[500]'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
                <div className=''>
                    <div className='flex flex-col gap-7'>
                        <p className='text-[15px] leading-7 text-[#111111] '>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                        <div className='flex flex-col gap-4 pl-8'>
                        <p className='text-[#111111] text-[16px] leading-7'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                        <p className='text-[#111111] text-[15px] leading-7'>If you enter your PAN information at checkout, you&quot;ll be able to pay for your order with PayTM or a local credit or debit card.</p>
                        <p className='text-[#111111] text-[16px] leading-7'>Apple Pay</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[16px] leading-7 font-[500] text-[#111111] lg:w-[923px]'><span className='text-black undeline'>Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you&quot;re not already a Member, join us today.</p>        
                            <div className='flex gap-4'>
                                <button className='text-[16px] leading-6 bg-black text-white w-[106px] h-10 rounded-full'>JOIN US</button>
                                <button className='text-[16px] leading-6 bg-black text-white w-[106px] h-10 rounded-full'>SHOP NIKE</button>
                            </div>
                        </div>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-[20px]'>FAQs</h3>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[16px] leading-7 font-bold text-[#111111]'>Does my card need international purchases enabled?</p>
                            <p className='text-[16px] leading-7 text-[#111111] lg:w-[842px]'>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                        </div>
                            <p className='text-[16px] leading-7 text-[#111111]'>Please note, some banks may charge <span className='text-black underline'>a small transaction fee</span> for international orders.</p>
                    </div> 
                    <p className='text-[16px] leading-7 text-[#111111] lg:w-[553px]'><p className= 'text-[16px] leading-7 text-black font-bold'>Can I pay for my order with multiple methods?</p>
                    No, payment for Nike orders can&quot;t be split between multiple payment methods.</p>
                    <div><p className='text-[16px] leading-7 text-[#111111] lg:w-[553px]'><p className=' text-[16px] leading-7 text-black font-bold'>What payment method is accepted for SNKRS orders?</p>
                    You can use any accepted credit card to pay for your SNKRS order.</p>
                    </div>
                    <div><p className='text-[16px] leading-7 text-[#111111] lg:w-[922px]'><p className=' text-[16px] leading-7 text-black font-bold'>Why don&quot;t I see Apple Pay as an option?</p>
                    To see Apple Pay as an option in the Nike App or on Nike.com, you&quot;ll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you&quot;ll need to use Safari to use Apple Pay on Nike.com.</p>
                    </div>
                    <div className='flex flex-col gap-[6px]'>
                        <p className='text-[16px] leading-7 text-[#111111]'>Was this answer helpful?</p>
                        <div className='flex'>
                            <Image src={like} alt="" />
                            <Image src={dislike} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='text-[#757575] text-[16px] leading-6'>RELATED</p>
                        <div className='pl-4 flex flex-col gap-6'>
                            <p className='text-[16px] leading-7 text-[#111111] underline font-[500]'>WHAT ARE NIKE&quot;S DELIVERY OPTIONS?</p>
                            <p className='text-[16px] leading-7 text-[#111111] underline font-[500]'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
                        </div>
                    </div>
                    </div> 
                </div>
            </div>

            <div className='1320:w-[313px]  1320:flex  flex-col grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-items-center gap-10 items-center'>
                <h1 className=' text-[28px] leading-8 text-center font-[500] lg:col-span-4 sm:col-span-2 col-span-1 '>CONTACT US</h1>
                <div className="w-[265px] flex flex-col">
                    <div className="flex flex-col gap-7 items-center">
                        <Image src={phone} alt="" />
                        <div>
                            <p className='text-[16px] leading-6 text-center text-[#111111]'>000 800 919 0566</p>
                            <p className='text-[16px] leading-6 text-center text-[#111111]'>Products & Orders: 24 hours a day, 7 days a week</p>
                            <p className='text-[16px] leading-6 text-center text-[#111111]'>Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
                        </div>
                    </div>
                </div>
                <div className="w-[265px]">
                    <div className="flex flex-col gap-9 items-center">
                        <Image src={locaton} alt="" />
                        <div>
                            <p className='text-[16px] leading-6 text-center text-[#111111]'>24 hours a day</p>
                            <p className='text-[16px] leading-6 text-center text-[#111111]'>7 days a week</p>
                        </div>
                    </div>
                </div>
                <div className="w-[265px]">
                    <div className="flex flex-col gap-9 items-center">
                        <Image src={mail} alt="" />
                        <div>
                            <p className='text-[16px] leading-6 text-center text-[#111111]'>We&quot;ll reply within</p>
                            <p className='text-[16px] leading-6 text-center text-[#111111]'>five business days</p>
                        </div>
                    </div>
                </div>
                <div className="w-[265px]">
                    <div className="flex flex-col gap-9 items-center">
                        <Image src={sms} alt="" />
                        <div>
                            <p className='text-[16px] leading-6 text-center text-[#111111]'>STORE LOCATOR</p>
                            <p className='text-[16px] leading-6 text-center text-[#111111]'>Find Nike retail stores near you</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
