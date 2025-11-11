'use client'
import Link from 'next/link'
import React from 'react'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const Navbar = () => {

  
  return (
    <div className='bg-white z-20 w-full text-black  flex items-center justify-between '>
        <div>
            <p className={`${inter.className} text text-6xl font-bold`}>FOUNTONICS</p>
            <p className={`${inter.className} text`}>LIFE AND SCIENCES</p>
        </div>
        <div className='flex nav_item items-center gap-10 p-2'>
            <Link href="/">HOME</Link>
            <Link href="/about">ABOUT US</Link>
            <Link href="/technology">TECHNOLOGY</Link>
            
            <button className='bg-red-500 p-5 rounded-4xl '>
                CONTACT US
            </button>
        </div>

    </div>
  )
}

export default Navbar