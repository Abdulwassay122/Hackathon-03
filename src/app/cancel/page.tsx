import React from 'react'
import cross from './assets/remove_1828843.png'
import Image from 'next/image'

export default function page() {
  return (
    <div className="w-full pt-40 pb-64 text-[32px] flex flex-col gap-4 items-center justify-center">
      <Image className="h-16 w-16" src={cross} alt="Cross" />
    <h1>Payment Canceled.</h1>
  </div>
  )
}
