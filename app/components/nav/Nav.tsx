
'use client'
import React, {useEffect, useState} from 'react';
import Link from 'next/link';

import { IoMdHome } from "react-icons/io";
import { FaUserAstronaut } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";


export default function Nav() {
    const [activeSection, setActiveSection] = useState('section1');
    const [navigationName, setNavigationName] = useState('Navigation')

    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('section');
          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
              setActiveSection(section.id);
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const handleMouseEnter = (name: React.SetStateAction<string>) => {
        setNavigationName(name);
      };
    
      const handleMouseLeave = () => {
        setNavigationName('Navigation');
      };
  
  return (
    <nav className='ml-6 h-full w-[20%] flex justify-start items-center lg:flex-row gap-6 text-2xl text-fourth'>
      <div className='flex h-full gap-6 items-center justify-center'>
        <Link href="#section1" className={activeSection === "section1" ? "active" : ""} 
          onMouseEnter={() => handleMouseEnter('Accueil')}  onMouseLeave={handleMouseLeave}>
          <IoMdHome/>
        </Link>

        <Link href="#section2" className={activeSection === "section2" ? "active" : ""} 
        onMouseEnter={() => handleMouseEnter('Presentation')}  onMouseLeave={handleMouseLeave}>
          <FaUserAstronaut/>
        </Link>

        <Link href="#section3" className={activeSection === "section3" ? "active" : ""} 
        onMouseEnter={() => handleMouseEnter('Services')}  onMouseLeave={handleMouseLeave}>
          <MdDesignServices/>
        </Link>

        <Link href="#section4" className={activeSection === "section4" ? "active" : ""} 
        onMouseEnter={() => handleMouseEnter('Realisation')}  onMouseLeave={handleMouseLeave}>
          <FaCheckDouble/>
        </Link> 
      </div>

      <div className='ml-4 w-[170px] h-full flex justify-center items-center '>
        <p>{navigationName}</p>   
      </div>
    </nav>
  )
}