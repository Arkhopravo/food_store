import React from 'react'
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (


    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)] flex items-center justify-center font-serif">
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[100%] md:w-full lg:w-[60%] 2xl:w-1/2">
      <div className="relative h-full w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover"/>
        </div>
        <div className="p-10 flex flex-col gap-5 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-xl">Welcome</h1>
          <span className='text-sm'>Log into your account or create a new account here!</span>
          <button className="flex gap-2 p-2 ring-1 ring-orange-70 rounded-md">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-2  ring-1 ring-blue-100 rounded-md">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?<Link className="underline" href="/"> Contact us</Link>
          </p>
        </div>
      </div>

    </div>
    )
}

export default LoginPage