'use client'
import React from 'react'
import Image from 'next/image'
import { TfiMouse } from "react-icons/tfi";
import SocialNetwork from '../socialNetwork/SocialNetwork';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { LuCode2 } from "react-icons/lu";
import { BsColumnsGap } from "react-icons/bs";
import { BsSpeedometer } from "react-icons/bs";
import { FaNetworkWired } from "react-icons/fa";

export default function HomePage() {

  return (
    <section id="section1" className="flex flex-col lg:flex-row">

      <div className="relative z-0 min-h-[50vh] w-full lg:min-h-full lg:w-[50%] bg-primary flex justify-center items-center ">
        <div className='w-[30vh] lg:w-[50vh] 2xl:w-[60vh] h-[30vh] lg:h-[60vh] absolute z-10 top-[20%] left-1/2 transform -translate-x-1/2 '>
        <Image src="/logo.jpg" alt='logo' fill={true}  className=' hue-rotate-90 object-contain' />   
        </div>
      </div>

      <div className="z-30 min-h-[50vh] w-full lg:min-h-full lg:w-[50%] bg-secondary flex flex-col justify-center items-center">
        <div className="h-[40vh] lg:h-[80%] w-[98%] flex flex-col justify-center lg:justify-end gap-1 xl:gap-6 p-2 ">

          <div className="group h-24 lg:h-32 w-full perspective-1000 ">
            <div className=" relative h-full w-full transition-all duration-500 transform-style-3d group-hover:transform rotate-x-180">
              <div className="absolute h-full w-full flex">
                <h1 className=" text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-primary">Développement</h1>
              </div>
              <div className="absolute h-full w-full bg-secondary transform rotate-x-180 backface-hidden">
                <div className='w-[80%] h-[90%] bg-fourth rounded-xl flex items-center justify-between '>
                <h4 className="ml-2 text-2xl sm:text-5xl lg:text-7xl text-blanc"><span className='text-5xl lg:text-8xl'>F</span>ull-stack</h4>
                 <div className='h-[70%] lg:h-[90%] w-[15%] lg:w-[10%] bg-blanc rounded-xl mr-4 flex justify-center items-center'><LuCode2 className='text-fourth text-2xl lg:text-5xl'/></div>
                </div>
              </div>
            </div>
          </div>

          <div className="group h-24 lg:h-32 w-full perspective-1000">
            <div className=" relative h-full w-full transition-all duration-500 transform-style-3d group-hover:transform rotate-x-180">
              <div className="absolute h-full w-full flex">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-sixth">Création</h1>
              </div>
              <div className="absolute h-full w-full bg-secondary transform rotate-x-180 backface-hidden">
                <div className='w-[80%] h-[90%] bg-fourth rounded-xl flex items-center justify-between '>
                 <h4 className="ml-2 text-2xl sm:text-5xl lg:text-7xl text-blanc"><span className='text-5xl lg:text-8xl'>F</span>ull-stack</h4>
                 <div className='h-[70%] lg:h-[90%] w-[15%] lg:w-[10%] bg-blanc rounded-xl mr-4 flex justify-center items-center'><BsColumnsGap className='text-fourth text-2xl lg:text-5xl'/></div>
                </div>
              </div>
            </div>
          </div>

          <div className="group h-24 lg:h-32 w- perspective-1000">
            <div className=" relative h-full w-full transition-all duration-500 transform-style-3d group-hover:transform rotate-x-180">
              <div className="absolute h-full w-full flex">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-primary">Optimisation</h1>
              </div>
              <div className="absolute h-full w-full bg-secondary transform rotate-x-180 backface-hidden">
              <div className='w-[80%] h-[90%] bg-fourth rounded-xl flex items-center justify-between  '>
              <h4 className="ml-2 text-2xl sm:text-5xl lg:text-7xl text-blanc"><span className='text-5xl lg:text-8xl'>F</span>ull-stack</h4>
                 <div className='h-[70%] lg:h-[90%] w-[15%] lg:w-[10%] bg-blanc rounded-xl mr-4 flex justify-center items-center'><BsSpeedometer className='text-fourth text-2xl lg:text-5xl'/></div>
                </div>
              </div>
            </div>
          </div>

          <div className="group h-24 lg:h-32 w-full perspective-1000 mb-0 lg:mb-8">
            <div className=" relative h-full w-full transition-all duration-500 transform-style-3d group-hover:transform rotate-x-180">
              <div className="absolute h-full w-full flex">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-sixth">Déploiement</h1>
              </div>
              <div className="absolute h-full w-full bg-secondary transform rotate-x-180 backface-hidden">
              <div className='w-[80%] h-[90%] bg-fourth rounded-xl flex items-center justify-between '>
              <h4 className="ml-2 text-2xl sm:text-5xl lg:text-7xl text-blanc"><span className='text-5xl lg:text-8xl'>F</span>ull-stack</h4>
                 <div className='h-[70%] lg:h-[90%] w-[15%] lg:w-[10%] bg-blanc rounded-xl mr-4 flex justify-center items-center'><FaNetworkWired className='text-fourth text-2xl lg:text-5xl'/></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className='flex row-reverse lg:row justify-between items-end w-full h-[20%]'>  
          <div className='ml-4 flex flex-col items-center text-sixth text-3xl animate-bounce hover:text-fourth'>
            <TfiMouse className='text-5xl' onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})} />
            <MdOutlineKeyboardArrowDown/>
          </div>
          <div className=' m-4'>
            <SocialNetwork/>  
          </div>
        </div> 
        
      </div>  
         
    </section>
  )
}
