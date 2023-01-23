import React from 'react'
import "./header.css"
import data from '../../AppInformation/data'
import { useState } from 'react'

const Header = () => {
  
  return (
    <div 
        id='home'
        className='header'>
      <video autoPlay muted loop>
        <source src="net.mp4" type="video/mp4" />
      </video>
        <div className='header-job'>
            <h1 className='header-title'>   
                <b> {data.header.title[0]} </b> {data.header.title[1]} 
            </h1>
            <h3 className='header-desc'>
            {data.header.desc[0]} <b>{data.header.desc[1]} </b>
            </h3>
          <img className="arrow" src={data.header.gif}  alt="gif" />
        </div> 
        <img 
            className="header-img" 
            src={data.header.img}  
            alt="avatar" 
        />
    </div>
  )
}

export default Header