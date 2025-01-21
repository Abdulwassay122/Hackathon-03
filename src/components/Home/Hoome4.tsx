"use client"
import React, { useEffect, useState } from 'react'
import arrowleft from "./assets/Vector (8).svg";
import arrowright from "./assets/Vector (9).svg";
import Image from "next/image";
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import ProductSkeleton from '../Loader/ProductSkeleLoader';
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
export default function Hoome4() {
    const[loading, setLoading] = useState<boolean>(true)

    const[menSlide, setMenSlide] = useState<number>(0)
    const[womenSlide, setwomenSlide] = useState<number>(0)
    // console.log(menSlide)

    const[menData, setMenData] = useState<Product[]>()
    const[womenData, setWomenData] = useState<Product[]>()

    useEffect(()=>{
        fetchApi()
        setLoading(false)
    })

    async function fetchApi(){
    const menDataa = await client.fetch(`*[_type == 'product' && category match "* Men's *"]{
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
  
}
`)
    const womenDataa = await client.fetch(`*[_type == 'product' && category match "* Women's *"]{
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

    setMenData(menDataa)
    setWomenData(womenDataa)
    }
    function onclick(){
        if (menData && menSlide < menData.length - 1) {
            setMenSlide(menSlide + 1);
          }
    }
    function onclick2(){
        if (womenData && womenSlide < womenData.length - 1) {
            setwomenSlide(womenSlide + 1);
          }
    }
  return (
    <section className='px-12 flex flex-col gap-[25px]'>
        <h2 className='text-[23px] leading-7 font-[500]'>Gear Up</h2>
        <div className='flex 1284:flex-row flex-col  justify-between'>
        {/* Men Items list */}
        <div key={'men'} className='flex flex-col gap-3  1284:items-end items-center relative'>
            {/* top button */}
            <div className='flex gap-3 items-center mr-12'>
                <p className='text-[15px] leading-6 font-[500]'>Shop Men&quot;s</p>
                <button onClick={()=>setMenSlide(menSlide !==0 ? menSlide - 1: 0)} className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowleft} alt="" />
                </button>
                <button onClick={onclick} className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowright} alt="" />
                </button>
            </div>
            {/* items list */}
            {loading && <ProductSkeleton/>}
            {!loading && <div className='flex md:w-[666px] w-[333px] overflow-hidden 1400:pl-12  pr-[6px] gap-3 pb-14'>
                {/* item 01 */}
                {menData?.map((ele)=>{ return (
                    <Link key={ele._id} href={`/productdetail/${ele._id}`}><div className={`min-w-[300px] -translate-x-[px] h-[393px] transition-transform duration-300 flex flex-col gap-[21px]`} style={{
                        transform: `translateX(-${menSlide * 100}%)`,
                      }}>
                    <div className='w-full h-[301px] flex items-center justify-center bg-[#E5E5E5]'>
                        <Image className='h-[301px] w-[300px]' width={200} height={200} src={ele.imageUrl} alt="" />    
                    </div>
                    <div className='pr-4'>
                        <div className='flex justify-between'>
                            <p className='text-[15px] leading-6 font-[500]'>{ele.productName}</p>
                            <p className='text-[15px] leading-6 font-[500]'>{ele.price}</p>
                        </div>
                        <p className='text-[15px] leading-6 font-[400] text-[#757575] w-[180px]'>{ele.category}</p>
                    </div>
                </div></Link>)})}
            </div>}
        </div>
        {/* woMen Items list */}
        <div key={'women'} className='flex flex-col gap-3 1284:items-end items-center'>
            {/* top button */}
            <div className='flex gap-3 items-center mr-12'>
                <p className='text-[15px] leading-6 font-[500]'>Shop Women&quot;s</p>
                <button onClick={()=>setwomenSlide(womenSlide !==0 ? womenSlide - 1: 0)} className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowleft} alt="" />
                </button>
                <button onClick={onclick2} className='h-12 w-12 flex justify-center items-center rounded-full bg-[#F5F5F5]'>
                    <Image src={arrowright} alt="" />
                </button>
            </div>
            {/* items list */}
            {loading && <ProductSkeleton/>}
            {!loading && <div className='flex 1400:pl-12 md:w-[666px] w-[333px] overflow-hidden    pr-[6px] gap-3 pb-14'>
                {/* item 01 */}
                {womenData?.map((ele)=>{return( 
                    <Link key={ele._id} href={`/productdetail/${ele._id}`}><div className={`min-w-[300px] h-[393px] transition-transform duration-300 flex flex-col gap-[21px]`} style={{
                        transform: `translateX(-${womenSlide * 100}%)`,
                      }}>
                    <div className='w-full h-[301px] flex items-center justify-center bg-[#E5E5E5]'>
                        <Image className='h-[301px] w-[300px]' width={200} height={200} src={ele.imageUrl} alt="" />    
                    </div>
                    <div className='pr-4'>
                        <div className='flex justify-between'>
                            <p className='text-[15px] leading-6 font-[500]'>{ele.productName}</p>
                            <p className='text-[15px] leading-6 font-[500]'>{ele.price}</p>
                        </div>
                        <p className='text-[15px] leading-6 font-[400] text-[#757575] w-[180px]'>{ele.category}</p>
                    </div>
                </div></Link>)})}
            </div>}
        </div>

        </div>
    </section>
  )
}
