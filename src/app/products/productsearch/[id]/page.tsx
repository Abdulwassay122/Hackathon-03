import SearchProducts from '@/components/Products/SearchProduct'
import React from 'react'

interface PageProps {
    params: Params;
    }
    
    interface Params {
      id: string;
    }

export default function page({ params: { id } }: PageProps) {
  return (
    <>
     <SearchProducts search={id}/> 
    </>
  )
}
