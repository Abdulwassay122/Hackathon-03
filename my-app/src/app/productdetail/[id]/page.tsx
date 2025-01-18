"use client"
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Header/Navbar'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import cart from './assets/Buy 2.svg'
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import star from "./assets/reshot-icon-star-ZH7KM9EGN8.svg";
import graystar from "./assets/graystar.svg";
import graystarhalf from "./assets/graystarhalf.svg";

interface PageProps {
  params: Params;
}

interface Params {
  id: string;
}

interface Product {
  productName:string;
  status:string;
  category:string;
  description:string;
  _id:string;
  imageUrl:string;
  colors:[string];
  price:number
  inventory:number
  discountPercentage:number
  rating:number
  ratingCount:number
  sizes:[string]
}

export default function page({ params: { id } }: PageProps) {

  const[data, setData] = useState<Product>()
  const[color, setColor] = useState<string>()
  const[size, setSize] = useState<string>()
  const [qty, setQty] = useState(1)

  
  useEffect(()=>{
    fetchApi()
  },[])

  async function fetchApi(){
    const item = await client.fetch(`*[_type == 'product' && _id == '${id}']{
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
    }
    `)
    setData(item[0])
    setColor(`${item[0].colors[0]}`)    
    setSize(`${item[0].sizes[0]}`)
  }
  
  function ratingSystem(Rating: number) {
    const totalStars = 5;
    const stars = [];
  
    for (let i = 0; i < totalStars; i++) {
      if (Rating >= i + 1) {
        // Full star
        stars.push(<Image key={i} className="h-8 w-8" src={star} alt="" />);
      } else if (Rating > i && Rating < i + 1) {
        // Half star
        stars.push(<Image key={i} className="h-8 w-8" src={graystarhalf} alt="" />);
      } else {
        // Gray star
        stars.push(<Image key={i} className="h-8 w-8" src={graystar} alt="" />);
      }
    }
  
    return <div className="flex gap-1">{stars}</div>;
  }
  return (
    <>
      <Navbar/>

      

    <section className='flex xl:gap-[100px] gap-10 1160:flex-row items-center flex-col xl:px-[110px] 450:px-10 px-5 pt-[110px] pb-[362px]'>
        
        <Image className='h-[550px] w-auto' width={600} height={600}  src={data?.imageUrl || ''} alt="" />
        <div className='flex flex-col gap-8'>
            <h1 className='sm:text-[48px] text-[32px] font-[500] leading-[48px]'>{data?.productName}</h1>
            <p className='text-[15px] leading-7 1160:w-[330px]'>{data?.description}</p>
            <div className='flex flex-col gap-'>
            <div className='flex gap-2 items-center h-[55px]'>
            <p className='text-[20px] font-[500]'>Colors :</p>
            {data?.colors.map((ele,index)=>{
              return(
                <div key={index} className={` ${color===ele?'border-2':''} border-gray-600 rounded-md`}>
                  <button onClick={()=>setColor(ele)}  className={`bg-gray-100 text-[15px] py-1 px-4 border-[3px] rounded-md border-white`}>{ele}</button>
                </div>
              )
            })}
            </div>
            <div className='flex gap-2 items-center h-[55px]'>
            <p className='text-[20px] font-[500]'>Sizes :</p>
            {data?.sizes.map((ele,index)=>{
              return(
                <div key={index} className={` ${size===ele?'border-2':''} border-gray-600 rounded-md`}>
                  <button onClick={()=>setSize(ele)}  className={`bg-gray-100 text-[15px] py-1 px-4 border-[3px] rounded-md border-white`}>{ele}</button>
                </div>
              )
            })}
            </div>
            </div>
            {/* <p className="text-[#9E3500] pl-1">
              {data ? `Ratings ${data.ratingCount}` : ""}
            </p> */}
            <div className='flex justify-between'>
              <div className='flex flex-col justify-between'>
            <div className="flex gap-4 items-center">
              {data && ratingSystem(data.rating)}
              <p className="text-[20px]">{data ? `(${data.rating})` : ""}</p>
            </div>
            <div className='flex gap-5 items-end'>
            <s className='sm:text-[22px] text-[12px] text-red-600 w-fit'>₹ {data? ((data?.price)/(1-(data.discountPercentage/100)) * qty).toFixed(2):''}</s>
            <div className='relative pt-4 pr-8'>
              <p className='sm:text-[36px] text-[26px] leading-8 w-fit'>₹ {data? data?.price * qty:''}</p>
              <p className='absolute bg-gray-700 rounded-full text-white top-0 right-0 px-2 text-[11px]'>-{data?.discountPercentage}%</p>
            </div>
            </div>
              </div>
            <div className='flex flex-col gap-4 wfull justify-end items-end'>
            <div className="border-[1px] flex w-[174px] items-center  justify-between rounded-full">
              <button onClick={()=>setQty(qty<=1?1:qty-1)} className="pl-6 text-[25px] text-gray-800">-</button>
              <p className="text-[20px] p-auto border-x-[1px]  h-full text-gray-800 px-5 leading-10">
                {qty}
              </p>
              <button onClick={()=>setQty(qty < (data?.inventory ?? Infinity) ? qty + 1 : qty)} className="pr-6 text-[25px] text-gray-800">+</button>
            </div>
            <div className='relative flex items-center'>
                <Link href="/cart"><button className='bg-black text-white text-[15px] leading-6 w-[174px] pl-6 h-[44px] rounded-full'>Add To Cart</button></Link> 
                <Image className='absolute left-5' src={cart} alt="" />
            </div>
            </div>
            </div>
        </div>
    </section>
  



      <Footer/>
    </>
  )
}