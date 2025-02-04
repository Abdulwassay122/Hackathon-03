'use client'
import React, { useEffect } from 'react'
import Image from "next/image";
import wishlist from './assets/Frame (14).svg';
import deletee from './assets/Frame (15).svg'
import Link from 'next/link'
import { useCartContext } from "@/app/Contexts/CartContext";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";


export default function Cart() {
  
  const router = useRouter();

  const cartContext = useCartContext();
  if (!cartContext) {
    return <div>Loading...</div>;
  }
  const { cart, setCart, removeFromCart, authToken } = cartContext;
  
  useEffect(() => {
    const ccart = JSON.parse(localStorage.getItem('cart')||"{}")
    if (ccart) {
        setCart(ccart);
      }
    }, []);
    
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    
    function checkOut(){
      if(authToken.length === 0 ){
        router.push('/login')
      }else if(cart.length === 0 ){
        toast.warning("Cart is Empty !", {
        position: "top-center",
        autoClose: 2000,
        })
      }else{
        router.push(`/checkout`)
      }
    }


  const data = cart
let subTotal = 0 
for(let i=0; i<data.length; i++){
  subTotal += data ? Number(data[i].totalprice) : 0
}

  return (
    <section className='pt-10 pb-[85px] xl:pl-[198px] sm:pl-[48px]  px-10 xl:pr-[115px] sm:pr-[48px] flex 1160:flex-row flex-col sm:gap-2 gap-10 font-inter'>
        <ToastContainer />
        <div className='flex flex-col gap-4'>
            <div className='bg-[#F7F7F7] h-[63px] flex justify-between items-center gap-1 px-2 pt-[14px] pb-[7px] w-full pl-2'>
                <div className='flex flex-col gap-1'>
                <h4 className='text-[13px] leading-[14px] font-[500]'>Free Delivery</h4>
                <div>
                    <p className='text-[11px] leading-[24px]'>Applies to orders of ₹ 14 000.00 or more.</p>    
                    <p className='text-[11px] leading-[24px] underline'></p>
                </div>
                </div>
                <Link className='text-[15px] underline font-semibold' href="/orders">Orders Detail.</Link>
            </div>
            <div className=''>
              <h2 className='text-[22px] leading-[33px] font-[500] md:w-[717px]'>Bag</h2>

              {data.length === 0 ? <div className=' w-full flex items-center h-[218px]  justify-center'>No Item</div>:''}
              {data.map((item, index)=>{

               return( <div key={index} className='md:w-[717px] sm:h-[218px] flex items-center border-b-[1px] border-solid'>
                <div className='sm:h-[170px] sm:flex-row flex-col flex sm:gap-[30px]'>
                    <Image width={100} height={100} className='h-[150px] w-auto' src={item.image} alt="" />
                    <div className='flex gap-4 sm:flex-row flex-col justify-between sm:w-[537px] pt-2'>
                          <div className=''>
                          <Link href={`/productdetail/${item.productId}`}><p className='text-[15px] leading-7'>{item.productName}</p></Link>
                          <p className='text-[15px] text-[#757575] leading-7'>{item.category}</p>
                          <p className='text-[15px] text-[#757575] leading-7'>Color <span className='ml-[10px]'>{item.color}</span></p>
                          <div className='flex gap-12'>
                          <p className='text-[15px] text-[#757575] leading-7'>Size <span className='ml-[10px]'>{item.size}</span></p>
                          <p className='text-[15px] text-[#757575] leading-7'>Quantity <span className='ml-[10px]'>{item.quantity}</span></p>
                          </div>
                          <div className='flex gap-4 mt-6'>
                              <Image src={wishlist} alt="" />
                              <button onClick={()=>removeFromCart(item.productId)}><Image src={deletee} alt="" /></button>
                          </div>
                      </div>
                        <p className='text-[15px] text-[#111111] leading-7'>{`₹ ${item.price*item.quantity}`}</p>
                    </div>
                </div>
              </div>)})}
            </div>
        </div>

        <div className='sm:w-[350px] h-[295px] flex flex-col gap-6 ml-2'>
          <h1 className='text-[22px] leading-[33px] font-[500] '>Summary</h1>
          <div className='flex flex-col gap-2'>
            <div className="flex justify-between"> 
              <p className='text-[15px] text-[#111111] leading-7'>Subtotal</p>
              <p className='text-[15px] text-[#111111] leading-7'>{`₹ ${subTotal.toFixed(2)}`}</p>
            </div>
            <div className="flex justify-between"> 
              <p className='text-[15px] text-[#111111] leading-7'>Estimated Delivery & Handling</p>
              <p className='text-[15px] text-[#111111] leading-7'>Free</p>
            </div>
          </div>
          <div className='flex justify-between h-[62px] items-center border-solid border-y-[1px]'>
            <p className='text-[15px] text-[#111111] leading-7'>Total</p>
            <p className='text-[15px] text-[#111111] leading-7'>{`₹ ${subTotal.toFixed(2)}`}</p>
          </div>
          <button onClick={checkOut} className='sm:w-[334px]  h-[60px] rounded-full mt-2 ml-2 bg-black text-[15px] text-[#ffffff] leading-7'>Member Checkout</button>
        </div>
    </section>
  )
}
