"use client"
import { client } from '@/sanity/lib/client'
import React, { useState } from 'react'
import star from "./assets/reshot-icon-star-ZH7KM9EGN8.svg";
import graystar from "./assets/graystar.svg";
import graystarhalf from "./assets/graystarhalf.svg";
import Link from "next/link";
import Image from "next/image";

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

export default function RelatedProduct({catagory, id}:{catagory:string, id:string}) {

    const [data, setData] = useState<Product[]>()

    async function fetchApi(){
  const item = await client.fetch(`*[_type == 'product' && category match "* ${catagory} *" && _id != '${id}'][0...3]{
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
setData(item)
}
fetchApi()
  return (
    <section className='flex flex-col gap-5 xl:px-[110px] 450:px-10 px-5'>
        <h1 className='text-[28px] font-semibold'>Related Products</h1>
        {data?.length===0?<div className=' w-full h-[250px] flex items-center justify-center'><p className='text-[20px]'>No related Product Found</p></div>:''}
        <div className='pt-[30px] flex gap-3 overflow-x-auto scrollbar-hidden pb-28'>
            {/* Item 01 */}
            {data?.map((item, index)=>{ return(<Link key={index} href={`/productdetail/${item._id}`}><div className='w[441.36px] h-[510.36px] flex flex-col gap-[21px]'>
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
