'use client'
import React, {useState} from 'react'
import Nav from '../nav/Nav'
import { TbSquareArrowRightFilled } from "react-icons/tb";
import { motion, AnimatePresence } from 'framer-motion';
import SocialNetwork from '../socialNetwork/SocialNetwork';



export default function Header() {
  const [open, setOpen] = useState(false)

  const handleClik= () => {
    setOpen(!open)
  }

  return (
    <header className='fixed z-40 top-0 w-full h-14 backdrop-blur-sm flex justify-between'>
      <Nav />
      <div className=' h-full flex justify-center items-center mr-6'><p className='text-fourth text-xl hidden md:block'>Me contacter </p><TbSquareArrowRightFilled className="text-fourth text-3xl ml-1 cursor-pointer hover:text-sixth" onClick={handleClik}/></div>
      <AnimatePresence>
      { open && (
        
         <motion.div 
         className='fixed asbolute z-10 h-screen w-full bg-primary bg-opacity-[97%] flex flex-col justify-center items-center gap-4'
         initial={{opacity: 0, x: 100}}
         animate={{opacity:1, x: 0}}
         exit={{opacity: 0, x: 100}}
         transition={{duration: 0.3}}
         > 
          <div className='text-fourth text-5xl cursor-pointer w-[90%] xl:w-[50%] flex justify-center lg:justify-end' onClick={handleClik}>X</div>
            <div className='flex w-[80%] xl:w-[50%] h-[50%] xl:h-[40%] flex-col justify-center items-center'>
                <h2 className='mb-2 text-5xl sm:text-6xl text-fourth whitespace-nowrap '>Julien Cros</h2>
                <div className='flex flex-col xl:flex-row justify-center items-center  w-full xl:w-[50%] h-28 xl:h-12 gap-8'>
                  <p className='mb-4 text-fifth text-2xl pr-6 whitespace-nowrap '>06 45 22 42 70</p>
                  <p className='mb-4 text-fifth text-2xl'>Jlien7@gmail.com</p>
                </div>
                <h3 className='text-6xl text-secondary mb-6 text-center '>Travaillons ensemble !</h3>
                <SocialNetwork/>    
            </div>
         </motion.div>
         
      )}
      </AnimatePresence>
    </header>
  )
}

