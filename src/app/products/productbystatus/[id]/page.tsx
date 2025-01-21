"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import filter from "./assets/Frame (8).svg";
import sort from "./assets/Frame (9).svg";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import star from "./assets/reshot-icon-star-ZH7KM9EGN8.svg";
import graystar from "./assets/graystar.svg";
import graystarhalf from "./assets/graystarhalf.svg";
import SideBar from "@/components/Products/SideBar";
import { useCartContext } from "@/app/Contexts/CartContext";
import ProductSkeleton from "@/components/Loader/ProductSkeleLoader";

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
interface PageProps {
params: Params;
}

interface Params {
  id: string;
}
export default function Products({ params: { id } }: PageProps) {

  const cartContext = useCartContext();
    if (!cartContext) {
      return <div>Loading...</div>;
    }
    const { under2500, under7500, men, women } = cartContext;

  const[data, setData] = useState<Product[]>()
  const[loading, setLoading] = useState<boolean>(true)

  useEffect(()=>{
    fetchApi()
  },[under2500, under7500, men, women])
  
  async function fetchApi(){
  const item = await client.fetch(`*[_type == 'product' && status match "* ${id} *"]{
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
  
}`);
    if(men===true){
      setData(item.filter((product: Product) => product.category.includes('Men')))
    } if(women===true){
      setData(item.filter((product: Product) => product.category.includes('Women')))
    } if(under2500===true){
      setData(item.filter((product: Product) => product.price <= 2500))
    } if(under7500===true){
      setData(item.filter((product: Product) => product.price <= 7500 ))
    }if(!men && !women && !under2500 && !under7500){
      setData(item)
    }

    setLoading(false)
  }

  function ratingSystem(Rating: number) {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      if (Rating >= i + 1) {
        // Full star
        stars.push(<Image key={i} className="h-5 w-5" src={star} alt="" />);
      } else if (Rating > i && Rating < i + 1) {
        // Half star
        stars.push(
          <Image key={i} className="h-5 w-5" src={graystarhalf} alt="" />
        );
      } else {
        // Gray star
        stars.push(<Image key={i} className="h-5 w-5" src={graystar} alt="" />);
      }
    }

    return <div className="flex gap-1">{stars}</div>;
  }
  return (
    <>
    <section className="pt-[76px] 1400:px-12 sm:px-8 px-5 flex flex-col gap-4">
      {/* header */}
      <div className="flex justify-between items-center">
        <p className="text-[24px] leading-8 font-[500]">New (500)</p>
        <div className="flex gap-6">
          <div className="flex gap-2">
            <p className="text-[16px] leading-7 text-center">Hide Filters</p>
            <Image src={filter} alt="" />
          </div>
          <div className="flex gap-2">
            <p className="text-[16px] leading-7 text-center">Sort By</p>
            <Image src={sort} alt="" />
          </div>
        </div>
      </div>
      <div className="flex">
        {/* sidebar */}
        <SideBar/>
        {/* Products */}
        {loading && <div className="grid 1400:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pb-[140px] border-b-[1px] border-solid">
          <ProductSkeleton/>
          <ProductSkeleton/>
          <ProductSkeleton/>
          <ProductSkeleton/>
          <ProductSkeleton/>
          <ProductSkeleton/>
          </div>}
        {!loading && <div className="grid 1400:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pb-[140px] border-b-[1px] border-solid">
          {/* Product 01 */}
          {data?.map((item,index) => (
            <Link
              key={index}
              className="shadow-md"
              href={`/productdetail/${item._id}`}
            >
              <div className="w-[348px] h[533px]">
                <div className="relative">
                  <Image
                    className="h-full w-full"
                    height={400}
                    width={400}
                    src={item.imageUrl}
                    alt=""
                  />
                <p className='absolute bg-gray-700 rounded-full text-white top-2 right-2 px-2 text-[11px]'>-{item.discountPercentage}%</p>
                </div>
                <div className="pt-[9px] pb-[22px] flex flex-col gap-5 px-4">
                  <div>
                    <p className="text-[15px] leading-7 font-[500] text-[#9E3500]">
                      {item.status}
                    </p>
                    <p className="text-[15px] leading-6 font-[500] text-[#111111]">
                      {item.productName}
                    </p>
                    <p className="text-[15px] leading-6 text-[#757575]">
                      {item.category}
                    </p>
                    <div className="flex flex-row gap-2">
                      <p className="text-[15px] leading-6  text-[#757575]">
                        Colors :
                      </p>
                      {item.colors.map((ele, index) => {
                        return (
                          <p key={index} className="text-[15px] leading-6  text-[#757575]">
                            {ele}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                        <s className="text-[15px] leading-7 font-[500] text-red-400">MRP : ₹ {data? ((item?.price)/(1-(item.discountPercentage/100))).toFixed(2):''}</s>
                        <p className="text-[18px] leading-7 font-[500] text-[#111111]">{`MRP : ₹ ${item.price}`}</p>
                    </div>
                    <div className="flex gap-1 justify-end items-center mr-2">
                      {ratingSystem(item.rating)}
                      <p className="text-[15px] leading-6  text-[#757575]">{`(${item.ratingCount})`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>}
              </div>
      {/*  Bottom Tags*/}
      <div className="py-16 flex flex-col gap-6 xl:pl-[300px] lg:pl-[150px] md:pl-[50px] pl-8">
        <h2 className="text-[19px] leading-6 font-[500]">Related Categories</h2>
        <div className="flex gap-2 flex-wrap    ">
          <p className="w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]">
            Best Selling Products
          </p>
          <p className="w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]">
            Best Shoes
          </p>
          <p className="w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]">
            New Basketball Shoes
          </p>
          <p className="w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]">
            New Football Shoes
          </p>
          <p className="w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]">
            New Men&apos;s Shoes
          </p>
          <p className="w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]">
            New Running Shoes
          </p>
          <p className="w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]">
            Best Men&apos;s Shoes
          </p>
          <p className="w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]">
            New Jordan Shoes
          </p>
          <p className="w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]">
            Best Women&apos;s Shoes
          </p>
          <p className="w-fit py-2 px-6 text-[12px] leading-[]  rounded-full border-solid border-[1px]">
            Best Training & Gym
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
