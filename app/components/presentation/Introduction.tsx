'use client'
import React from 'react'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

export default function Introduction() {
  const ref = useRef()
  const { scrollYProgress } = useScroll ({
    target: ref,
    offset: ['0 1', '1.5 1.5']
  })

  return (
    <section id='section2' className=' bg-secondary flex justify-center items-center'>
     <motion.div 
      ref= {ref}
      style= {{
        scale: scrollYProgress,
        opacity: scrollYProgress
      }}
      
      className='min-h-[80vh] w-[80%] border border-black shadow-xl'>

      </motion.div>

    </section>
  )
}

