import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function SocialNetwork() {
  return (
    <div className='flex justify-center items-center gap-4 text-4xl text-sixth'>
        <FaLinkedin className='hover:scale-110 hover:text-fourth' />
        <FaTwitterSquare className='hover:scale-110 hover:text-fourth' />
        <FaGithubSquare className='hover:scale-110 hover:text-fourth' />
     
    </div>
  )
}
