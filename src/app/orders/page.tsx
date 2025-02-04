"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useCartContext } from '../Contexts/CartContext';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import OrderLoader from '@/components/Loader/OrderLoader'; 


interface OrderSchema {
  orderId: string;
  userId: string;
  paymentStatus:string;
  products: {
    quantity: number;
    productId: string;
    productName: string;
    paymentStatus:string;
    description: string;
    category: string;
    price: number;
    totalprice: number;
    image: string;
    color: string;
    size: string;
    orderStatus: string;
    orderDate: string;
    estimatedDelivery: string;
  }[]
}


export default function page() {
  const cartContext = useCartContext();
      if (!cartContext) {
        return <div>Loading...</div>;
      }
      const { authToken } = cartContext;
            
      const [orders, setOrders] = useState<OrderSchema[]>();
        const [loading, setLoading] = useState<boolean>(true);
      
      useEffect(() => {
            const fetchData = async () => {
              setLoading(true)
              try {
                const response = await fetch('/api/protected', {
                  method:'POST',
                  headers: {
                    Authorization: `Bearer ${authToken}`,
                  },
                });
                const responseData = await response.json();
                const data = await client.fetch(`*[_type == 'orders' && userId == '${responseData.user.id}']`);
                setOrders(data);
                setLoading(false)
              } catch (error) {
                console.error('Error fetching protected data', error);
              }
            };
            fetchData();
          }, [authToken]);
          
            const allProducts: OrderSchema['products'] = orders?.flatMap(order => order.products) || [];

  return (
    <>
    <section className='pt-10 pb-[85px] xl:pl-[198px] sm:pl-[48px]  px-10 xl:pr-[115px] sm:pr-[48px] flex 1160:flex-row flex-col sm:gap-2 gap-10 font-inter'>
        <div className='flex flex-col gap-4 w-full'>
            <div className='bg-[#F7F7F7] h-[63px] flex flex-col gap-1 px-2 pt-[14px] pb-[7px] w-full pl-2'>
                <h4 className='text-[13px] leading-[14px] font-semibold'>Orders Detail</h4>
                <div>
                    <p className='text-[11px] leading-[24px]'>See your order is dispatched arrived or delivered.</p>    
                    <p className='text-[11px] leading-[24px] underline'></p>
                </div>
            </div>
            <div className='flex flex-col gap-8'>
            {authToken.length !== 0 ? <><h2 className='text-[22px] leading-[33px] font-[500]'>Orders</h2>
              {!loading && allProducts.length === 0 && <div className='w-full flex justify-center items-center h-[400px] text-[20px] font-semibold'>No Orders History Found.</div>}
              {loading && <div className='w-full flex flex-col text-[20px] font-semibold gap-2'><OrderLoader/> <OrderLoader/></div>}
              {!loading && allProducts.length !==0 && allProducts?.map((order, i)=>{ return(
                <div key={i} className='md:w-full sm:h[218px] flex items-center border-b-[1px] border-solid'>
                 <div className='sm:h[170px] pb-8 w-full flex sm:flex-row flex-col sm:gap-[30px]'>
                    <Image className='w-[200px] h-[200px]' height={200} width={200} src={order.image} alt="" />
                    <div className='flex lg:flex-row flex-col gap-4 justify-between sm:w-full pt-2'>
                      <div className='flex flex-col gap-2'>
                          <p className='text-[15px] leading-7 font-semibold'>{order.productName}</p>
                          <p className='text-[15px] text-[#757575] leading-7'>{order.category}</p>
                          <div className='flex gap-2'>
                          <p className='text-[15px] text-[#757575] leading-7'>Size:<span className='ml-[10px]'>{order.size},</span></p>
                          <p className='text-[15px] text-[#757575] leading-7'>Quantity:<span className='ml-[10px]'>{order.quantity},</span></p>
                          <p className='text-[15px] text-[#757575] leading-7'>Color:<span className='ml-[10px]'>{order.color}</span></p>
                          </div>
                        <p className='text-[15px] text-[#111111] leading-7'>MRP: ₹ {order.totalprice}</p>
                        
                        <p className='text-[18px] leading-7'>Status:<span className='ml-[10px]'>{order.orderStatus}</span></p>
                      </div>
                      <div className='font-semibold'>
                      <p className='text-[15px] leading-7'>Order Placed<span className='ml-[10px]'>{order.orderDate}</span></p>
                      <p className='text-[15px] leading-7'>Estimated Delivery<span className='ml-[10px]'>{order.estimatedDelivery}</span></p>
                      </div>
                    </div>
                  </div>
                  </div>)})}
              </>
               : 
              <div className='flex flex-col justify-center items-center gap-4 h-60'>
                <div className='font-semibold w-full flex justify-center items-center gap-4'>
                <Link href={`/joinus`} className="bg-black text-white text-[15px] leading-6 px-8 h-[44px] rounded-lg flex items-center">
                      Join Us
                </Link>
                <Link href={`/login`} className="bg-[#F5F5F5] text-[15px] leading-6 px-8 h-[44px] rounded-lg flex items-center">
                      SignIn
                </Link>
                </div>
                <p className='text-sm'>Sign to see Order details.</p>
              </div>}
              
            </div>
        </div>
    </section>
    </>
  )
}
