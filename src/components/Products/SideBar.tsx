"use client"
import React from 'react'
import arrowup from "./assets/Frame (10).svg";
import Image from "next/image";
import Link from "next/link";
import { useCartContext } from '@/app/Contexts/CartContext';


export default function SideBar() {
    const cartContext = useCartContext();
      if (!cartContext) {
        return <div>Loading...</div>;
      }
      const { under2500, setunder2500, under7500, setunder7500, men, setMen, women, setWomen } = cartContext;
      const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setunder2500(event.target.checked); // event.target.checked returns true/false
      };
      const handleCheckboxChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setunder7500(event.target.checked); // event.target.checked returns true/false
      };
      const handleCheckboxChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMen(event.target.checked); // event.target.checked returns true/false
      };
      const handleCheckboxChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWomen(event.target.checked); // event.target.checked returns true/false
      };
  return (
    <div>
      {/* sidebar */}
      <div className="w-[260px] h-full  flex-col gap-10 pr-5 flex">
          <div className="w-[192px] h-[400.72px] flex flex-col gap-[14.59px] overflow-y-auto scrollbar-hidden">
            <Link href="/products/productbytag/Shoes"><p className="text-[15px] leading-[21.6px] font-[500]">Shoes</p></Link>
            {/* <Link href=""><p className="text-[15px] leading-[21.6px] font-[500]">
              Sports Bras
            </p></Link> */}
            <Link href="/products/productbytag/Top"><p className="text-[15px] leading-[21.6px] font-[500]">
              Tops & T-Shirts
            </p></Link>
            <Link href=""><p className="text-[15px] leading-[21.6px] font-[500]">
              Hoodies & Sweatshirts
            </p></Link>
            <Link href=""><p className="text-[15px] leading-[21.6px] font-[500]">Jackets</p></Link>
            <Link href=""><p className="text-[15px] leading-[21.6px] font-[500]">
              Trousers & Tights
            </p></Link>
            <Link href="/products/productbytag/Short"><p className="text-[15px] leading-[21.6px] font-[500]">Shorts</p></Link>
            <Link href=""><p className="text-[15px] leading-[21.6px] font-[500]">
              Tracksuits
            </p></Link>
            <Link href=""><p className="text-[15px] leading-[21.6px] font-[500]">
              Jumpsuits & Rompers
            </p></Link>
            <Link href=""><p className="text-[15px] leading-[21.6px] font-[500]">
              Skirts & Dresses
            </p></Link>
            <Link href=""><p className="text-[15px] leading-[21.6px] font-[500]">Socks</p></Link>
            <Link href=""><p className="text-[15px] w-[150px] leading-[21.6px] font-[500]">
              Accessories & Equipment
            </p></Link>
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
                  <input className="h-5 w-5" checked={men} onChange={handleCheckboxChange3}  type="checkbox" />
                  <label className="text-[15px] leading-6" htmlFor="input">
                    Men
                  </label>
                </div>
                <div className="flex gap-[6px] items-center">
                  <input className="h-5 w-5" checked={women} onChange={handleCheckboxChange4} type="checkbox" />
                  <label className="text-[15px] leading-6" htmlFor="input">
                    Women
                  </label>
                </div>
                {/* <div className="flex gap-[6px] items-center">
                  <input className="h-5 w-5" type="checkbox" />
                  <label className="text-[15px] leading-6" htmlFor="input">
                    Unisex
                  </label>
                </div> */}
              </div>
            </div>
            {/* kids     */}
            {/* <div className="border-t-[1px] border-solid">
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
            </div> */}
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
                  <input className="h-5 w-5" checked={under2500} onChange={handleCheckboxChange} type="checkbox" />
                  <label className="text-[15px] leading-6" htmlFor="input">
                    Under ₹ 2 500.00
                  </label>
                </div>
                <div className="flex gap-[6px] items-center">
                  <input className="h-5 w-5" checked={under7500} onChange={handleCheckboxChange2} type="checkbox" />
                  <label className="text-[15px] leading-6" htmlFor="input">
                    ₹ 2 501.00 - ₹ 7 500.00
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
