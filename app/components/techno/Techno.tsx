import React from 'react'
import Image from 'next/image'

export default function Techno() {
  return (
    <section className=' bg-secondary flex flex-col justify-center items-center'>
      <article className='min-h-[60vh] w-full flex flex-col lg:flex-row justify-start items-center text-primary '>
        <div className='relative h-[50vh] w-full lg:w-[50%] bg-fifth bg-opacity-40 mask overflow-hidden flex justify-center items-center mt-6 lg:mt-0 '>
        <Image src="/home.png" alt='logo' height={300} width={700} className='absolute z-10 right-4 lg:right-20' />
        </div>

        <div className='h-full w-[90%] sm:w-[60%] lg:w-[30%] overflow-hidden flex flex-col justify-center pl-4 mt-6 lg:mt-0'>
          <p className='text-xl text-fourth'>Techno de prédilection</p>
          <h2 className='text-5xl'>Pourquoi l'ecosystéme React ?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa harum, delectus asperiores, eos porro voluptatibus consectetur est tempore maiores inventore, adipisci quas?
              Voluptate ipsam dolore magni atque temporibus ipsum nemo.</p>
        </div>
    
      </article>
      <article className='min-h-[40vh] w-[70%] flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-20 text-primary'>

          <div className='h-[370px] w-[90%] lg:w-[25%] overflow-hidden'>
            <Image src='/ordi.png' alt="icone" height={200} width={200} className='float-start' />
            <p className='mt-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quas pariatur qui nulla vel nihil? Culpa, totam libero officiis expedita eligendi tempora animi ullam aspernatur ipsam at ipsum. 
              Distinctio nobis eaque tenetur dolore perspiciatis! Non nobis quos tempore. Corporis maiores, veritatis est reprehenderit ea alias soluta ex. Qui, sed iste.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, incidunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, eum.</p>
          </div>
          
          <div className='h-[370px] w-[90%] lg:w-[25%] overflow-hidden'>
            <Image src='/ordi.png' alt="icone" height={200} width={200} className='float-start' />
            <p className='mt-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quas pariatur qui nulla vel nihil? Culpa, totam libero officiis expedita eligendi tempora animi ullam aspernatur ipsam at ipsum. 
              Distinctio nobis eaque tenetur dolore perspiciatis! Non nobis quos tempore. Corporis maiores, veritatis est reprehenderit ea alias soluta ex. Qui, sed iste.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, incidunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, eum.</p>
          </div>

          <div className='h-[370px] w-[90%] lg:w-[25%] overflow-hidden'>
            <Image src='/ordi.png' alt="icone" height={200} width={200} className='float-start' />
            <p className='mt-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quas pariatur qui nulla vel nihil? Culpa, totam libero officiis expedita eligendi tempora animi ullam aspernatur ipsam at ipsum. 
              Distinctio nobis eaque tenetur dolore perspiciatis! Non nobis quos tempore. Corporis maiores, veritatis est reprehenderit ea alias soluta ex. Qui, sed iste.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, incidunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, eum.</p>
          </div>

      </article>
    </section>
  )
}
