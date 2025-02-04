"use client"
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import loader from './assets/Animation - 1738330169677.gif'
import { useCartContext } from '../Contexts/CartContext';

export default function page() {
    const router = useRouter()
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [message, setMessage] = useState("Verifying...");
    const [loading, setLoading] = useState<boolean>(true);

    const cartContext = useCartContext();
        if (!cartContext) {
          return <div>Loading...</div>;
        }
        const { setAuthToken } = cartContext;
        

    useEffect(()=>{
        async function fetchApi (){
            setLoading(true)
            const response = await fetch(`/api/auth/verify`, {
                method:'POST',
                body:JSON.stringify(token)
            })
            const res = await response.json()
            setLoading(false)
            setMessage(res.message)
            setAuthToken(res.token)
            // localStorage.setItem('token',res.token)
            setTimeout(() => {
                router.push('/')
            }, 2000);
        }
        fetchApi()
    })
  return (
    <div className='w-full h-screen flex flex-col items-center justify-start pt-40 gap-4 '>
      <div className='shadow-md rounded-md bg-[#F5F5F5] py-10 px-20 flex flex-col w-[600px] items-center'>
                <h1 className='text-2xl font-semibold'>{message}</h1>
                {loading && <Image className='h-16 w-auto' src={loader} alt="" />}
      </div>
    </div>
  )
}
