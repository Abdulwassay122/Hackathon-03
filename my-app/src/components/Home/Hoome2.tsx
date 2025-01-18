import React from 'react'
import Image from "next/image";
import arrowleft from "./assets/Vector (8).svg";
import arrowright from "./assets/Vector (9).svg";
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

export default async function Hoome2() {
    const data : Product[] = await client.fetch(`*[_type == 'product' && productName match "* Air *"]{
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
  sizes
}`)
  return (
    <section className='h-[604.36px] pl-12'>
        <div className='flex justify-between sm:flex-row flex-col pr-12 sm:gap-0 gap-4 sm:items-center'>
            <h3 className='text-[22px] leading-7 font-[600]'>Best of Air Max</h3>
            <div className='flex gap-3 items-center'>
                <p className='text-[15px] leading-6 font-[500]'>Shop</p>
                <button className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowleft} alt="" />
                </button>
                <button className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowright} alt="" />
                </button>
            </div>
        </div>
        {/* Item List */}
        <div className='pt-[30px] flex gap-3 overflow-x-auto scrollbar-hidden'>
            {/* Item 01 */}
            {data.map((item, index)=>{ return(<Link key={index} href={`/productdetail/${item._id}`}><div className='w[441.36px] h-[510.36px] flex flex-col gap-[21px]'>
                <div className='bg-[#E5E5E5] w-[425px] h-[425px]'>
                    <Image className='w-[425px] h-[425px]' height={300} width={300} src={item.imageUrl} alt="" />
                </div>
                <div className='w-[425px] h-12'>
                    <div className='flex justify-between'>
                        <p className='text-[15px] leading-6 font-[500]'>{item.productName}</p>
                        <p className='text-[15px] leading-6 font-[500]'>₹ {item.price}</p>
                    </div>
                    <p className='text-[15px] leading-6 font-[400] text-[#757575]'>{item.category}</p>
                </div>
            </div></Link>)})}

        </div>
    </section>
  )
}
