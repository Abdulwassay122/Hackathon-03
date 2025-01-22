"use client"
import React, { useState, ChangeEvent, useEffect } from 'react'
import Image from "next/image";
import logo1 from './assets/Vector (6).svg'
import nike from './assets/Vector (7).svg'
import wishlidt from './assets/Frame.svg'
import cartt from './assets/Frame (1).svg'
import searchh from './assets/Frame (2).svg'
import Link from 'next/link'
import { useCartContext } from '@/app/Contexts/CartContext';
import { useRouter } from 'next/navigation';
import hamburger from "./assets/burger-menu-svgrepo-com.svg";
import cross from "./assets/cross-svgrepo-com.svg";

export default function Navbar() {
  const cartContext = useCartContext();
    if (!cartContext) {
      return <div>Loading...</div>;
    }
    const { cart, isActive, setIsActive } = cartContext;
    
    const [ search, setSearch ] = useState('');
        const [toggle, setToggle] = useState<boolean>(false);
    

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    };
    const router = useRouter();

    useEffect(()=>{
      if(search.length > 0 ){
        const some = () => {
          router.push(`/products/productsearch/${search.replace(/ /g, '%20')}`)
        }
        some();
        console.log(search)
      }
    },[search])

  return (
    <header className='relative '>
      <div className='w-full h-9 flex justify-between items-center px-10 bg-[#F5F5F5]'>
        <div className='h-6 w-6 flex justify-center items-center'>
            <Link href="/"><Image src={logo1} alt="" /></Link>
        </div>
        <nav className='w-[272.81px] flex justify-center'>
            <ul className=' flex items-center'> 
                <Link href="/about"><li className='text-[11px] leading-[14px] font-[500]'>Find a Store</li></Link>
                <span className='ml-4 mr-[11px]'>|</span>
                <Link href="/about"><li className='text-[11px] leading-[14px] font-[500]'>Help</li></Link>
                <span className='ml-3 mr-[11px]'>|</span>
                <Link href="/joinus"><li className='text-[11px] leading-[14px] font-[500]'>Join Us</li></Link>
                <span className='ml-3 mr-[14px]'>|</span>
                <Link href="/login"><li className='text-[11px] leading-[14px] font-[500]'>Sign In</li></Link>
            </ul>
        </nav>
      </div>
      <div className='w-full h-[60px] flex items-center px-10 gap-5 justify-between'>
        <Link href="/"><Image className='mx-2' src={nike} alt="" /></Link>
        <div className='lg:w-[1211px] h-full flex items-center justify-end gap-60'>
            <div className='flex items-center xl:w-[890px] gap-10 justify-between'>
            <nav className='md:block hidden '>
                <ul className=' text-[16px] leading-6 font-[500] gap-7 flex'>
                    <Link href="/products"><li onClick={()=>setIsActive(1)} className={`${isActive===1?'font-semibold border-b-2':''} border-solid  border-black`}>All Products</li></Link>
                    <Link href="/products/productbytag/Men's"><li onClick={()=>setIsActive(2)} className={`${isActive===2?'font-semibold border-b-2':''} w-full border-solid  border-black`}>Men</li></Link>
                    <Link href="/products/productbytag/Women's"><li onClick={()=>setIsActive(3)} className={`${isActive===3?'font-semibold border-b-2':''} border-solid border-black`}>Women</li></Link>
                    <Link href="/products/productbytag/Shoes"><li onClick={()=>setIsActive(4)} className={`${isActive===4?'font-semibold border-b-2':''} border-solid  border-black`}>Shoes</li></Link>
                    <Link href="/products/productbystatus/Seller"><li onClick={()=>setIsActive(5)} className={`${isActive===5?'font-semibold border-b-2':''} border-solid  border-black `}>Best Seller</li></Link>
                    <Link href="/products/productbystatus/Just"><li onClick={()=>setIsActive(6)} className={`${isActive===6?'font-semibold border-b-2':''} border-solid border-black`}>Just In</li></Link>
                </ul>
            </nav>
            <div className='relative lg:block hidden'>
                <input className='bg-[#F5F5F5] w-[180px] pl-10 h-10 rounded-full text-[#CCCCCC]' value={search} onChange={handleChange} placeholder='Search' type="text" />
                <Image className='absolute left-2 top-2 ' src={searchh} alt="" />
            </div>
            </div>
        </div>
        <div className='md:w-[84px] flex justify-between gap-4 items-center'>
            <div className='h-9 w-9 flex justify-center hover:bg-[#F5F5F5] rounded-full items-center'><Image src={wishlidt} alt="" /></div>
            <div className='h-9 w-9 flex justify-center hover:bg-[#F5F5F5] rounded-full items-center relative'><Link href="/cart"><Image src={cartt} alt="" /><p className='absolute top-3 left-[14px] text-[11px]'>{cart.length===0?'':cart.length}</p></Link></div>
            <Image className={`h-6 w-6 md:hidden block `} onClick={()=>setToggle(true)} src={hamburger} alt="" />
            <nav className={`md:hidden block bg-[#F5F5F5] absolute h-screen top-0 right-0 px-10 py-5 z-10 transition-all duration-200 ${toggle?'translate-x-0':'translate-x-full'}`}>
                <ul className=' text-[16px]  w-44 right-0 leading-6 font-[500] gap-7 flex flex-col  z-10 '>
                    <Image className={`h-8 w-8 block`} onClick={()=>setToggle(false)} src={cross} alt="" />
                    <Link href="/products"><li onClick={()=>setIsActive(1)} className={`${isActive===1?'font-semibold border-b-2':''} border-solid  border-black`}>All Products</li></Link>
                    <Link href="/products/productbytag/Men's"><li onClick={()=>setIsActive(2)} className={`${isActive===2?'font-semibold border-b-2':''} w-full border-solid  border-black`}>Men</li></Link>
                    <Link href="/products/productbytag/Women's"><li onClick={()=>setIsActive(3)} className={`${isActive===3?'font-semibold border-b-2':''} border-solid border-black`}>Women</li></Link>
                    <Link href="/products/productbytag/Shoes"><li onClick={()=>setIsActive(4)} className={`${isActive===4?'font-semibold border-b-2':''} border-solid  border-black`}>Shoes</li></Link>
                    <Link href="/products/productbystatus/Seller"><li onClick={()=>setIsActive(5)} className={`${isActive===5?'font-semibold border-b-2':''} border-solid  border-black `}>Best Seller</li></Link>
                    <Link href="/products/productbystatus/Just"><li onClick={()=>setIsActive(6)} className={`${isActive===6?'font-semibold border-b-2':''} border-solid border-black`}>Just In</li></Link>
                </ul>
            </nav>
        </div>
      </div>
        <div className='relative mx-10 lg:hidden block mb-4'>
                <input value={search} onChange={handleChange} className='bg-[#F5F5F5] w-full pl-10 h-10 rounded-full text-[#CCCCCC]' placeholder='Search' type="text" />
                <Image className='absolute left-2 top-2 ' src={searchh} alt="" />
            </div>
    </header>
  )
}
