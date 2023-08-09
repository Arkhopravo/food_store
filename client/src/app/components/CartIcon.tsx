import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <Link href="/cart" className=' font-serif items-center gap-4 text-xl cursor-pointer  flex flex-row'>
        <div className="relative w-8 h-8 md:w-5 md:h-5" >

        <Image src="/cart.png" alt="" fill/>
        </div>
        <h1 className='' >Cart(2) </h1>
    </Link>
  )
}

export default CartIcon