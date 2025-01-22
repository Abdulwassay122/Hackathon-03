"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import arrowleft from "./assets/Vector (8).svg";
import arrowright from "./assets/Vector (9).svg";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import ProductSkeleton from '../Loader/Home2SkeleLoader';


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

export default function Hoome2() {

    const [data, setData] = useState<Product[]>()
    const[loading, setLoading] = useState<boolean>(true)
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(()=>{
        fetchApi()
    })

    async function fetchApi(){
      try {
        const item = await client.fetch(`*[_type == 'product' && productName match "* Air *"]{
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
    setLoading(false)
        
      } catch (error) {
        console.error(error)
        throw new Error('Check Your internet Connection!')}
    }

    const handleNext = () => {
        if (data && currentIndex < data.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      };
    
      const handlePrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      };

  return (
    <section className='h-[604.36px] md:pl-12 pl-4'>
        <div className='flex justify-between 450:flex-row flex-col pr-12 sm:gap-0 gap-4 450:items-center'>
            <h3 className='text-[22px] leading-7 font-[600]'>Best of Air Max</h3>
            <div className='flex gap-3 items-center'>
                <p className='text-[15px] leading-6 font-[500]'>Shop</p>
                <button onClick={handlePrev} className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowleft} alt="" />
                </button>
                <button onClick={handleNext} className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowright} alt="" />
                </button>
            </div>
        </div>
        {/* Item List */}
        <div className='pt-[30px] flex gap-3 overflow-x-auto scrollbar-hidden'>
            {/* Item 01 */}
            {loading && <div className='flex gap-3'>
          <ProductSkeleton/>
          <ProductSkeleton/>
          <ProductSkeleton/>
          <ProductSkeleton/>
          </div>}
            {!loading && data?.map((item, index)=>{ return(<Link key={index} href={`/productdetail/${item._id}`}><div className='w[441.36px] h-[510.36px] flex flex-col gap-[21px] transition-all duration-200' style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}>
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
