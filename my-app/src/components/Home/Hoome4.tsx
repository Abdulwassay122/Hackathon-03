import React from 'react'
import arrowleft from "./assets/Vector (8).svg";
import arrowright from "./assets/Vector (9).svg";
import Image from "next/image";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';


interface Product {
    productName: string;
    status: string;
    category: string;
    description: string;
    _id: string;
    imageUrl: string;
    colors: [string];
    price: number;
    inventory: number;
    discountPercentage: number;
    rating: number;
    ratingCount: number;
    sizes: [string];
  }

export default async function Hoome4() {
    const menData : Product[] = await client.fetch(`*[_type == 'product' && category match "* Men's *"]{
  status,
  "imageUrl": image.asset->url,
  colors,
  _id,
  category,
  description,
  inventory,
  productName,
  price,
  discountPercentage,
  rating,
  ratingCount,
  
}`)
    const womenData : Product[] = await client.fetch(`*[_type == 'product' && category match "* Women's *"]{
  status,
  "imageUrl": image.asset->url,
  colors,
  _id,
  category,
  description,
  inventory,
  productName,
  price,
  discountPercentage,
  rating,
  ratingCount,
  
}`)
  return (
    <section className='px-12 flex flex-col gap-[25px]'>
        <h2 className='text-[23px] leading-7 font-[500]'>Gear Up</h2>
        <div className='flex 1284:flex-row flex-col  justify-between'>
        {/* Men Items list */}
        <div className='flex flex-col gap-3  1284:items-end items-center'>
            {/* top button */}
            <div className='flex gap-3 items-center mr-12'>
                <p className='text-[15px] leading-6 font-[500]'>Shop Men&quot;s</p>
                <button className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowleft} alt="" />
                </button>
                <button className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowright} alt="" />
                </button>
            </div>
            {/* items list */}
            <div className='scrollbar-hidden flex 1400:pl-12 sm:flex-row flex-col pr-[6px] gap-3 pb-14 w-[666px] overflow-x-auto'>
                {/* item 01 */}
                {menData.map((item, index)=>{ return(<Link key={index} href={`/productdetail/${item._id}`}><div className='w-[300px] h-[393px] flex flex-col gap-[21px]'>
                    <Image className='h-auto' height={300} width={300} src={item.imageUrl} alt="" />
                    <div className='pr-4'>
                        <div className='flex justify-between'>
                            <p className='text-[15px] leading-6 font-[500]'>{item.productName}</p>
                            <p className='text-[15px] leading-6 font-[500]'>₹ {item.price}</p>
                        </div>
                        <p className='text-[15px] leading-6 font-[400] text-[#757575] w-[180px]'>{item.category}</p>
                    </div>
                </div></Link>)})}   
        
            </div>
        </div>
        {/* woMen Items list */}
        <div className='flex flex-col gap-3 1284:items-end items-center'>
            {/* top button */}
            <div className='flex gap-3 items-center mr-12'>
                <p className='text-[15px] leading-6 font-[500]'>Shop Women&quot;s</p>
                <button className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowleft} alt="" />
                </button>
                <button className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowright} alt="" />
                </button>
            </div>
            {/* items list */}
            <div className='flex 1400:pl-12 sm:flex-row flex-col  pr-[6px] gap-3 pb-14 w-[666px] overflow-x-auto scrollbar-hidden'>
                {/* item 01 */}
                {womenData.map((item, index)=>{ return(<Link key={index} href={`/productdetail/${item._id}`}><div className='w-[300px] h-[393px] flex flex-col gap-[21px]'>
                    <Image className='' height={300} width={300} src={item.imageUrl} alt="" />
                    <div className='pr-4'>
                        <div className='flex justify-between'>
                            <p className='text-[15px] leading-6 font-[500]'>{item.productName}</p>
                            <p className='text-[15px] leading-6 font-[500]'>₹ {item.price}</p>
                        </div>
                        <p className='text-[15px] leading-6 font-[400] text-[#757575] w-[180px]'>{item.category}</p>
                    </div>
                </div></Link>)})}
                
            </div>
        </div>

        </div>
    </section>
  )
}
