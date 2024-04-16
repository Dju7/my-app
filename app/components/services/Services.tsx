import React from 'react'
import OpenCard from '../openCard/OpenCard'

export default function Services() {
  return (
    <section id='section3' className=' bg-secondary flex flex-col'>
        <div className='min-h-[50vh] w-full flex justify-center items-center'>

          <article className='w-[90%] lg:w-[70%] h-[60%] flex flex-col text-primary'>
            <p className='text-fourth text-xl'>Services</p>
            <h2 className='text-7xl'>Faites eclore votre projet</h2>
            <p className='text-xl mt-6'>Boostez votre présence en ligne avec un site web sur-mesure et performant </p>
            <p className='text-xl'>Libérez le potentiel de votre entreprise avec un site web élegant conçus pour captiver et convertir</p>
          </article>

        </div>
        
        <div className='flex justify-center items-center gap-6 min-h-[50vh] w-full bg-sixth'>
          <OpenCard />
           
        </div>
    </section>
  )
}
