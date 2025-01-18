import React from "react";
import Image from "next/image";
import filter from "./assets/Frame (8).svg";
import sort from "./assets/Frame (9).svg";
import arrowup from "./assets/Frame (10).svg";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import star from "./assets/reshot-icon-star-ZH7KM9EGN8.svg";
import graystar from "./assets/graystar.svg";
import graystarhalf from "./assets/graystarhalf.svg";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

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
export default async function Products({ params: { id } }: PageProps) {
  const data: Product[] = await client.fetch(`*[_type == 'product' && status match "* ${id} *"]{
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
}`);

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
    <Navbar/>
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
        <div className="w-[260px] h-full  flex-col gap-10 pr-5 lg:flex hidden">
          <div className="w-[192px] h-[400.72px] flex flex-col gap-[14.59px] overflow-y-auto">
            <p className="text-[15px] leading-[21.6px] font-[500]">Shoes</p>
            <p className="text-[15px] leading-[21.6px] font-[500]">
              Sports Bras
            </p>
            <p className="text-[15px] leading-[21.6px] font-[500]">
              Tops & T-Shirts
            </p>
            <p className="text-[15px] leading-[21.6px] font-[500]">
              Hoodies & Sweatshirts
            </p>
            <p className="text-[15px] leading-[21.6px] font-[500]">Jackets</p>
            <p className="text-[15px] leading-[21.6px] font-[500]">
              Trousers & Tights
            </p>
            <p className="text-[15px] leading-[21.6px] font-[500]">Shorts</p>
            <p className="text-[15px] leading-[21.6px] font-[500]">
              Tracksuits
            </p>
            <p className="text-[15px] leading-[21.6px] font-[500]">
              Jumpsuits & Rompers
            </p>
            <p className="text-[15px] leading-[21.6px] font-[500]">
              Skirts & Dresses
            </p>
            <p className="text-[15px] leading-[21.6px] font-[500]">Socks</p>
            <p className="text-[15px] w-[150px] leading-[21.6px] font-[500]">
              Accessories & Equipment
            </p>
          </div>
          <div className="w-[192px]">
            {/* gender */}
            <div className="border-t-[1px] border-solid">
              <div className="h-12 flex justify-between items-center">
                <p className="text-[16px] leading-6 font-[500]">Gender</p>
                <Image src={arrowup} alt="" />
              </div>
              <div className="pb-6 pt-1 pr-[5.68px] pl-[2px]">
                <div className="flex gap-[6px] items-center">
                  <input className="h-5 w-5" type="checkbox" />
                  <label className="text-[15px] leading-6" htmlFor="input">
                    Men
                  </label>
                </div>
                <div className="flex gap-[6px] items-center">
                  <input className="h-5 w-5" type="checkbox" />
                  <label className="text-[15px] leading-6" htmlFor="input">
                    Women
                  </label>
                </div>
                <div className="flex gap-[6px] items-center">
                  <input className="h-5 w-5" type="checkbox" />
                  <label className="text-[15px] leading-6" htmlFor="input">
                    Unisex
                  </label>
                </div>
              </div>
            </div>
            {/* kids     */}
            <div className="border-t-[1px] border-solid">
              <div className="h-12 flex justify-between items-center">
                <p className="text-[16px] leading-6 font-[500]">Kids</p>
                <Image src={arrowup} alt="" />
              </div>
              <div className="pb-6 pt-1 pr-[5.68px] pl-[2px]">
                <div className="flex gap-[6px] items-center">
                  <input className="h-5 w-5" type="checkbox" />
                  <label className="text-[15px] leading-6" htmlFor="input">
                    Boys
                  </label>
                </div>
                <div className="flex gap-[6px] items-center">
                  <input className="h-5 w-5" type="checkbox" />
                  <label className="text-[15px] leading-6" htmlFor="input">
                    Girls
                  </label>
                </div>
              </div>
            </div>
            {/* shop by price  */}
            <div className="border-t-[1px] border-solid">
              <div className="h-12 flex justify-between items-center">
                <p className="text-[16px] leading-6 font-[500]">
                  Shop By Price
                </p>
                <Image src={arrowup} alt="" />
              </div>
              <div className="pb-6 pt-1 pr-[5.68px] pl-[2px]">
                <div className="flex gap-[6px] items-center">
                  <input className="h-5 w-5" type="checkbox" />
                  <label className="text-[15px] leading-6" htmlFor="input">
                    Under ₹ 2 500.00
                  </label>
                </div>
                <div className="flex gap-[6px] items-center">
                  <input className="h-5 w-5" type="checkbox" />
                  <label className="text-[15px] leading-6" htmlFor="input">
                    ₹ 2 501.00 - ₹ 7 500.00
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products */}
        <div className="grid 1400:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 pb-[140px] border-b-[1px] border-solid">
          {/* Product 01 */}
          {data.map((item,index) => (
            <Link
              key={index}
              className="shadow-md h-fit"
              href={`/productdetail/${item._id}`}
            >
              <div className="w-[348px] h[555px]">
                <div className="relative">
                  <Image
                    className="h-full w-auto"
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
                          <p className="text-[15px] leading-6  text-[#757575]">
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
        </div>
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
    <Footer/>
    </>
  );
}
