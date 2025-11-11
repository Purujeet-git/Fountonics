"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import Image from 'next/image';
import { Langar } from 'next/font/google';
import {BsArrowReturnRight} from 'react-icons/bs';
import IndustriesScene from './IndustriesScene';
import { ThreeDCardDemo } from './ThreeDCardDemo';
import { ThreeCardDemo2 } from './ThreeCardDemo2';
import { Threecarddemo1 } from './Threecarddemo1';


gsap.registerPlugin(SplitText);


const langar = Langar({ subsets: ['latin'],weight: '400' });

const Hero = () => {

  return (
    <div className='relative w-full'>
      <div className='fixed z-20 h-5 w-5 bg-red-100'></div>
      {/* Sticky 3D Canvas - Spans across both hero and expertise sections */}
      <div className='fixed top-0 h-screen w-full -z-10'>
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
          <color attach="background" args={['#222222']} />
          <Scene />
        </Canvas>
      </div>

      {/* Hero Content - First Section */}
      <div className='relative h-screen z-10 flex items-center justify-center p-8 md:p-16'>

        {/* Column 1: Left Text */}
        <div className='w-1/3 absolute left-10 top-30 text-white'>
          <p className='tracking-[9px] font-bold'>Fountomics Lifsciences</p>
          <div className='flex pt-0 items-center h-10 gap-x-4'>
            <p className='text-[50px]'>Powerful</p>
            <div className='h-12 rounded-4xl w-40 bg-purple-200'></div>
          </div>
          <div><p className='text-[50px]'>Analysis Platform</p></div>
          <div className='flex items-center gap-4'>
            <div className='h-12 rounded-4xl w-40 bg-purple-200'></div>
            <p className='text-[50px]'> For Research</p>
          </div>
        </div>

        {/* Column 2: Transparent - 3D model visible behind */}
        <div className='w-1/3 h-full flex items-center justify-center'>
          {/* Just a border frame, model renders behind it */}
        </div>

        {/* Column 3: Right Text */}
        <div className='w-1/3 text-white absolute right-10 bottom-30 self-center'>
          <p>
            Unlock the potential of your data with Fountomics Lifciences! Our powerful analytics platform allows you to gain insight into complex biological systems quickly and efficiently. With Fountomics, discover the answers you need to advance your research and make a lasting impact on your field.
          </p>
        </div>
      </div>

      {/* Next Section - "Expertise" - This is where the model "lands" */}
      <div
        id="next-section"
        className='relative h-screen z-20 w-full text-white p-8 md:p-16'

      >
        <div className='flex z-20  h-full  items-center'>

          {/* Column 1: "Expertise" Text */}
          <div className='w-1/3 flex flex-col '>
            <h2 className='text-6xl font-bold'>EXPERTISE</h2>
            <h2 className='text-6xl font-bold'>THAT COULD</h2>
            <h2 className='text-6xl font-bold'>CONQUER</h2>
            <div>
              <Image
                src={'/image1.jpg'}
                height={300}
                width={300}
                alt='image'
                className='rounded-4xl'
              />
            </div>
          </div>

          {/* Column 2: 3D Model "Landing Zone" - Transparent so sticky canvas shows through */}
          <div className='w-1/3 flex justify-center'>


          </div>

          {/* Column 3: Stats "150+" */}
          <div className='w-1/3 flex flex-col  h-[70vh] -z-30 items-center gap-12 relative'>
            <div className='text-center flex justify-center items-center gap-5'>
              <p className='text-4xl z-20 font-bold text-yellow-400'>10+</p>
              <p className='text-4xl tracking-widest'>PROJECTS</p>
            </div>
            <div className='text-center flex justify-center items-center gap-5'>
              <p className='text-4xl z-20 font-bold text-yellow-400'>20+</p>
              <p className='text-4xl tracking-widest'>CLIENTS</p>
            </div>
            <div className='text-center flex justify-center items-center gap-5'>
              <p className='text-4xl z-20 font-bold text-yellow-400'>1</p>
              <p className='text-4xl tracking-widest'>POINT OF FOCUS</p>
            </div>
            <p className='text-xl p-10'>Fountomics Lifesciences is dedicated in developing a data analysis tool to providing the highest quality of analytical services. Our technology allows for comprehensive proteomics, genomics and metabolomics data analysis, which is not vendor specific.</p>
            <button className='bg-red-500 p-5 rounded-4xl px-14'>
              Meet us
            </button>
          </div>

        </div>
      </div>

      {/* Third Section - After this, orbit controls should be enabled */}
      <div
        id="orbit-section"
        className='relative h-screen z-10 w-full'
        style={{ backgroundColor: '#1a1a1a' }}
      >
        <div className=' h-screen left-1/3 absolute z-10'>
          <IndustriesScene/>
        </div>
        <div className='w-1/2 absolute z-0 p-24 text-white'>
        <p>Industries</p>
        <p className={`${langar.className} text-5xl`}>
          Analytical Services<br/>
          Other<br/>
          Collaborative<br/>
          Services<br/>
        </p>
        </div>
        
        <div className='absolute text-white bottom-28 right-0 text-5xl'>
          <p className='flex'><BsArrowReturnRight />BioTech</p>
          <p className='flex'><BsArrowReturnRight />Analytical Needs</p>
          <p className='flex'><BsArrowReturnRight />Purification of Pharma</p>
          <p className='flex'><BsArrowReturnRight />BioPharma Products</p>
        </div>
      </div>
      <div className='h-screen w-full flex gap-10 p-10 bg-black'>
        <ThreeDCardDemo/>
        <ThreeCardDemo2/>
        <Threecarddemo1/>
        </div>

    </div>
  )
}

export default Hero;