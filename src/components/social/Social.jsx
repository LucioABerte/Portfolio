import React from 'react'
import "./social.css"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { SiUpwork } from "react-icons/si";

const Social = (props) => {
  return (
    <div className='social-container'>
        <a 
            href="https://github.com/LucioABerte" 
            target="_blank" 
            rel="noopener noreferrer"
        >
           <AiFillGithub />
        </a>
        <a 
            href="https://www.instagram.com/bertelucio/?hl=es-la" 
            target="_blank" 
            rel="noopener noreferrer"
        >
           <AiFillInstagram />
        </a>
        <a 
            href="https://www.linkedin.com/in/lucioabert%C3%A9/" 
            target="_blank" 
            rel="noopener noreferrer"
        >
           <AiFillLinkedin />
        </a>
        <a 
            href="https://www.upwork.com/freelancers/~01281dac1b353aa9f6?s=1110580755107926016" 
            target="_blank" 
            rel="noopener noreferrer"
        >
           <SiUpwork />
        </a>
    </div>
  )
}

export default Social