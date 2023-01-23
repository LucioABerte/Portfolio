import React from 'react'
import "./item.css"
import { GoCalendar } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";




const Item = (props) => {
  return (
    <div className='experience'>
      <div className='experience-top'>
          <h2>
              {props.title}
              <button className='badge' > {props.badge} </button> 
          </h2>
      </div>
      <div className="experience-bot">
          <span className='span1'> <BsBuilding className='icon'/> {props.span1}  
              <a href={props.href} target="_blank" rel="noopener noreferrer"> 
                  {props.a}
              </a>   
          </span>
          <span className='span3'> <GoCalendar className='icon'/> {props.date} </span>
          <span className='span2'> <IoLocationOutline className='icon' /> {props.country} </span>
          <div className='separator'></div>
          <p> {props.description}</p>
      </div>
    </div>
  )
}

export default Item