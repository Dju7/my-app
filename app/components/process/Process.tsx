import React from 'react'
import Image from 'next/image'

export default function Process() {
  return (
    <section id='section3' className=' bg-secondary flex flex-col justify-center items-center text-primary'>
        <div className='h-[15%] w-[90%] lg:w-[60%] flex flex-col mb-4 mt-6 lg:mt-0'>
            <p className='text-fourth text-xl'>Process</p>
            <h3 className='text-6xl'>3 étapes avant la livraison</h3>
        </div>

        <div className='h-[20%] w-[90%] lg:w-[60%] flex flex-col-reverse lg:flex-row justify-center items-center'>
        <div className='h-[90%] w-[90%] lg:w-[50%] flex justify-center items-center'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi minus dolores itaque suscipit distinctio nisi doloribus vitae! Quibusdam atque magnam, aliquam quasi voluptas quis beatae ut perferendis adipisci nostrum eligendi repudiandae magni corporis corrupti fugiat. Fugiat at pariatur veritatis, iste exercitationem id enim sed. Commodi labore nemo, error ea ducimus aspernatur, quod perspiciatis facilis mollitia veniam earum quas beatae vel delectus quidem cumque expedita corrupti minus eum? Eum rerum esse totam accusantium numquam repudiandae eius beatae doloribus sequi aut cupiditate exercitationem similique laborum facere architecto, dicta quam. Voluptatem ratione, mollitia fuga beatae architecto odit quas est. Obcaecati nobis modi itaque!</p>
         </div>
         <div className='h-[90%] w-[50%] flex justify-center items-center'>
         <Image src='/pik.png' alt='react' height={300} width={300} />
         </div>
        </div>

        <div className='h-[20%] w-[90%] lg:w-[60%] flex flex-col lg:flex-row justify-center items-center'>
         <div className='h-[90%] w-[50%] flex justify-center items-center'>
         <Image src='/pik.png' alt='react' height={300} width={300} />
         </div>
         <div className='h-[90%] w-[90%] lg:w-[50%] flex justify-center items-center'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi minus dolores itaque suscipit distinctio nisi doloribus vitae! Quibusdam atque magnam, aliquam quasi voluptas quis beatae ut perferendis adipisci nostrum eligendi repudiandae magni corporis corrupti fugiat. Fugiat at pariatur veritatis, iste exercitationem id enim sed. Commodi labore nemo, error ea ducimus aspernatur, quod perspiciatis facilis mollitia veniam earum quas beatae vel delectus quidem cumque expedita corrupti minus eum? Eum rerum esse totam accusantium numquam repudiandae eius beatae doloribus sequi aut cupiditate exercitationem similique laborum facere architecto, dicta quam. Voluptatem ratione, mollitia fuga beatae architecto odit quas est. Obcaecati nobis modi itaque!</p>
         </div>
        </div>

       

        <div className='h-[20%] w-[90%] lg:w-[60%] flex flex-col-reverse lg:flex-row justify-center items-center mb-6 lg:mb-0'>
        <div className='h-[90%] w-[90%] lg:w-[50%] flex justify-center items-center'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi minus dolores itaque suscipit distinctio nisi doloribus vitae! Quibusdam atque magnam, aliquam quasi voluptas quis beatae ut perferendis adipisci nostrum eligendi repudiandae magni corporis corrupti fugiat. Fugiat at pariatur veritatis, iste exercitationem id enim sed. Commodi labore nemo, error ea ducimus aspernatur, quod perspiciatis facilis mollitia veniam earum quas beatae vel delectus quidem cumque expedita corrupti minus eum? Eum rerum esse totam accusantium numquam repudiandae eius beatae doloribus sequi aut cupiditate exercitationem similique laborum facere architecto, dicta quam. Voluptatem ratione, mollitia fuga beatae architecto odit quas est. Obcaecati nobis modi itaque!</p>
         </div>
         <div className='h-[90%] w-[50%] flex justify-center items-center'>
         <Image src='/pik.png' alt='react' height={300} width={300} />
         </div>
        
        </div>
    </section>
  )
}
