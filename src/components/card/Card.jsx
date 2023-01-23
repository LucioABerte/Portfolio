import React from 'react'
import "./card.css"
import { SlPaperClip } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="project" className="card-img" />
        <h2> {props.title}</h2>
        <p>{props.desc}</p>
        <h4>{props.subtitle}</h4>
        <div className="tags">
          <button>{props.button[0]}</button>
          <button>{props.button[1]}</button>
          <button>{props.button[2]}</button>
          <button>{props.button[3]}</button>
        </div>
        <div className="card-links">
          <a href={props.live} className='clip'> <SlPaperClip className='fa'/> Live Preview </a>
          <a href={props.code} className='hub'> <SiGithub className='fa'/> View Code</a>
        </div>
    </div>
  )
}


export default Card