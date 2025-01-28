"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import profile from './ss.svg'
import { useCartContext } from '../Contexts/CartContext'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import ProfileSectionLoader from '@/components/Loader/profileLoader'

interface User {
  name:string,
  userId:string,
  email:string,
  gender: 'male'|'female',
  DOB:string,
  phoneNo?:number,
  address?:number,
}

const page = () => {

    const cartContext = useCartContext();
      if (!cartContext) {
        return <div>Loading...</div>;
      }
      const { authToken } = cartContext;

      const[user, setUser]= useState<User>()
      const[loading, setLoading]= useState<boolean>(true)
      
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
            const data = await client.fetch(`*[_type == 'user' && userId == '${responseData.user.id}']`)
            setUser(data[0])
            setLoading(false)
          } catch (error) {
            console.error('Error fetching protected data', error);
          }
        };
        fetchData();
      }, [authToken]);
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
    {authToken.length === 0 && <div className='flex flex-col justify-center items-center gap-4 h-60'>
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
    {authToken.length !== 0 && loading && <div className='w-full flex justify-center'><ProfileSectionLoader/></div>}
      {authToken.length !== 0 && !loading && <div className="flex flex-col justify-center items-center sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <Image className='h-20 w-20' src={profile} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              {user?.name}
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">{user?.email}</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 border-t border-gray-200 pt-8 mt-8 sm:mt-0 text-center sm:text-left">
          <div className="mb-4">
            <p className="text-lg font-medium text-gray-900">Gender</p>
            <p className="text-base text-gray-600">{user?.gender}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-medium text-gray-900">Phone Number</p>
            <p className="text-base text-gray-600">{user?.phoneNo}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-medium text-gray-900">Address</p>
            <p className="text-base text-gray-600">{user?.address}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-medium text-gray-900">Date of Birth</p>
            <p className="text-base text-gray-600">{user?.DOB}</p>
          </div>
        </div>
      </div>}
    </div>
  </div>
</section>
  )
}

export default page
