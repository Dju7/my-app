import React from 'react'
import Carrousel from '../carrousel/Carrousel'

export default function Realisations() {
  return (
    <section id='section4' className=' bg-secondary flex flex-col justify-center items-center'>
      <div className='h-[15vh] w-[70%]'>
        <p className='text-xl text-fourth mt-20'>Works</p>
        <h3 className='text-7xl text-primary '>Realisations</h3> 
      </div>  
      <div className='h-[85vh] w-[80%] flex flex-col justify-center items-center'>
      <Carrousel itemsPerPage={3}/>
      </div>
    </section>  
  )
}
