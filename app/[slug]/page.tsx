'use client'
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";


interface PageProps {
    params: { slug: string };
  }
  
  const itemsData = [
    { number: 1, text: "Lorem ipsum dolor sit amet" },
    { number: 2, text: "Consectetur adipiscing elit" },
    { number: 3, text: "Sed do eiusmod tempor incididunt" },
    { number: 4, text: "Ut labore et dolore magna aliqua" },
    { number: 5, text: "Ut enim ad minim veniam" },
    { number: 6, text: "Quis nostrud exercitation ullamco" },
    { number: 7, text: "Laboris nisi ut aliquip ex ea commodo consequat" },
    { number: 8, text: "Duis aute irure dolor in reprehenderit" }
  ]
  
  const Page: FC<PageProps> = ({ params }) => {
   
    const slugNumber = parseInt(params.slug);
    const item = itemsData.find(item => item.number === slugNumber);
  
    return (
      <section className="flex gap-6 justify-center items-center">
        <div className=" relative h-[80vh] w-[80%]">
            <motion.div 
             className="absolute z-20 left-[5%] lg:left-[3%] top:0 lg:top-36 h-[35%] lg:h-[45%] w-[75%] lg:w-[35%] 2xl:w-[25%] bg-secondary p-4"
            initial={{x:500, y:200}}
            animate={{x:0, y:0}}
            transition={{duration:0.4}}
            >
                <h1>Page pour {params.slug}</h1>
                {item ? (
                <p>{item.text}</p>
                ) : (
                <p>Texte non trouvé pour le numéro {slugNumber}</p>
                )}
                <Link href="/#section4">Retour</Link>
            </motion.div>
            <motion.div 
            className="absolute z-10 left-0 lg:left-[20%] bottom-0 lg:top-12 bg-fifth h-[90%] w-full lg:w-[80%] shadow-xl shadow-primary"
            initial={{x:-500, y:-50, opacity:0.5}}
            animate={{x:0, y:0, opacity:1}}
            transition={{duration:0.8,}}
            >

            </motion.div>
        </div>
      </section>
    );
  };
  
  export default Page;