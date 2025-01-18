import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Header/Navbar'
import Cart from '@/components/Login/Cart'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar/>
      <Cart/>
      <Footer/>
    </>
  )
}