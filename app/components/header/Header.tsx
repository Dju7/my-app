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
      <div className=' h-full flex justify-center items-center mr-6'><p className='text-fourth text-xl'>Me contacter </p><TbSquareArrowRightFilled className="text-fourth text-3xl ml-1 cursor-pointer hover:text-sixth" onClick={handleClik}/></div>
      <AnimatePresence>
      { open && (
        
         <motion.div 
         className='fixed asbolute z-10 h-screen w-full bg-primary bg-opacity-[97%] flex flex-col justify-center items-center gap-4'
         initial={{opacity: 0, x: 100}}
         animate={{opacity:1, x: 0}}
         exit={{opacity: 0, x: 100}}
         transition={{duration: 0.3}}
         > 
          <div className='text-fourth text-5xl cursor-pointer w-[50%] flex justify-end' onClick={handleClik}>X</div>
            <div className='flex w-[80%] lg:w-[50%] h-[70%] lg:h-[50%] flex-col lg:flex-row'>

              <div className='w-full h-[50%] lg:w-[50%] lg:h-full flex flex-col justify-center items-center '>
                <h2 className='text-5xl text-fourth '>Julien Cros</h2>
                <p className='mb-4 text-fifth text-xl'>06 45 22 42 70</p>
                <h3 className='text-6xl text-secondary mb-6 text-center '>Travaillons ensemble !</h3>
                <SocialNetwork/>
              </div>

              <div className='w-full h-[50%] lg:w-[50%] lg:h-full flex flex-col justify-center items-center'>
                 
                 <form className='h-full w-[98%] flex flex-col justify-center items-center text-primary'>
                 <p className='text-fourth text-3xl mb-4'>Formulaire de contact</p>
                  <label className='text-fifth'>Nom :</label>
                  <input></input>
                  <label className='text-fifth'>Email :</label>
                  <input></input>
                  <label className='text-fifth'>Message :</label>
                  <textarea className='h-72 w-[80%] p-2'/>
                  <button className='mt-10 border bg-sixth hover:bg-tertiary p-2'>Envoyer</button>

                 </form>          
              </div>
      
            </div>
         </motion.div>
         
      )}
      </AnimatePresence>
    </header>
  )
}

