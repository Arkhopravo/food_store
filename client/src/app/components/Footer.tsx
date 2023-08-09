import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 font-serif lg:px-20 xl:px-2 text-red-500 flex items-center justify-between'>
      <Link href="/" className="font-bold text-xl">MASSIMO</Link>
      <h5 className='text-xs'>© ALL RIGHTS RESERVED.</h5>
    </div> 
  )
}

export default Footer