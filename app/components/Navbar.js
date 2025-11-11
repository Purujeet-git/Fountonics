'use client'
import Link from 'next/link'
import React from 'react'
import { Inter } from 'next/font/google'
import gsap from 'gsap-trial'
import SplitText from 'gsap-trial/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(SplitText);


const inter = Inter({ subsets: ['latin'] })

const Navbar = () => {

  useGSAP(() => {

    let split =  SplitText.create('.text', {type: 'words,chars'});
    
    gsap.from(split.chars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,})

    gsap.fromTo(".nav_item", {
      opacity: 0,
      y:20,
    },{
      opacity: 1,
      y:0,
      duration: 1,
    }
    )
  }, []);
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