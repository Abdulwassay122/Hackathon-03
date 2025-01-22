import Image from 'next/image'
import React from 'react'
import alert from './assets/alert-error-svgrepo-com.svg'

export default function FallBack() {
  return (
      <div className="h-[500px] w-full flex gsp-5 justify-center items-center">
        <div className='flex items-end gap-5'>
          <p className="sm:text-[25px] text-[20px]">Sorry! Something went Wrong.</p>
            <Image className='sm:h-10 sm:w-10 h-8 w-8' src={alert} alt="" />
        </div>
      </div>
  )
}
