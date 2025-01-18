import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Header/Navbar'
import AboutUs from '@/components/Home/AboutUs'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar/>
      <AboutUs/>
      <Footer/>
    </>
  )
}