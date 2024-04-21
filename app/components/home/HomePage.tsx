import React from 'react'
import Image from 'next/image'
import { TfiMouse } from "react-icons/tfi";
import SocialNetwork from '../socialNetwork/SocialNetwork';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function HomePage() {
  return (
    <section id="section1" className="flex flex-col lg:flex-row">

      <div className="relative z-0 min-h-[50vh] w-full lg:min-h-full lg:w-[50%] bg-primary flex justify-center items-center ">
        <Image src="/abstrait.jpg" alt='accueil' height={800} width={800} className='absolute z-10 bottom-0 left-0' />
        <Image src="/next.svg" alt='accueil' height={600} width={600} className='absolute z-10 top-1/3 ' />   
      </div>

      <div className="z-30 min-h-[50vh] w-full lg:min-h-full lg:w-[50%] bg-secondary flex flex-col justify-center items-center">
        <div className="h-[90%] w-[98%]  flex flex-col justify-center gap-1 xl:gap-6 p-2">

          <div className="group h-32 w-full perspective-1000">
            <div className=" relative h-full w-full transition-all duration-500 transform-style-3d group-hover:transform rotate-x-180">
              <div className="absolute h-full w-full flex">
                <h1 className=" text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-primary">Développement</h1>
              </div>
              <div className="absolute h-full w-full bg-secondary transform rotate-x-180 backface-hidden">
                <div className="flex w-[70%] flex-col">
                 <h4 className="text-7xl text-fourth">F R O N T - END</h4>
                 <h4 className="text-7xl text-fourth text-end">B A C K - END</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="group h-32 w-full perspective-1000">
            <div className=" relative h-full w-full transition-all duration-500 transform-style-3d group-hover:transform rotate-x-180">
              <div className="absolute h-full w-full flex">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-sixth">Création</h1>
              </div>
              <div className="absolute h-full w-full bg-secondary transform rotate-x-180 backface-hidden">
               <h4 className="text-6xl">by-by World</h4>
              </div>
            </div>
          </div>

          <div className="group h-32 w- perspective-1000">
            <div className=" relative h-full w-full transition-all duration-500 transform-style-3d group-hover:transform rotate-x-180">
              <div className="absolute h-full w-full flex">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-primary">Optimisation</h1>
              </div>
              <div className="absolute h-full w-full bg-secondary transform rotate-x-180 backface-hidden">
               <h1 className="text-6xl">by-by World</h1>
              </div>
            </div>
          </div>

          <div className="group h-32 w-full perspective-1000">
            <div className=" relative h-full w-full transition-all duration-500 transform-style-3d group-hover:transform rotate-x-180">
              <div className="absolute h-full w-full flex">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl text-sixth">Déploiement</h1>
              </div>
              <div className="absolute h-full w-full bg-secondary transform rotate-x-180 backface-hidden">
               <h1 className="text-6xl">byWorld</h1>
              </div>
            </div>
          </div>
          
        </div>
        <div className='flex row-reverse lg:row justify-between items-center w-full h-20'>  
          <div className='ml-4 flex flex-col items-center text-sixth text-3xl animate-bounce hover:text-fourth'>
            <TfiMouse className='text-5xl'/>
            <MdOutlineKeyboardArrowDown/>
          </div>
          <div className=' mr-4'>
            <SocialNetwork/>  
          </div>
        </div> 
        
      </div>  
         
    </section>
  )
}
