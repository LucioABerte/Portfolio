import React from 'react';
import "./footer.css"
import data from "../../AppInformation/data";
import Social from '../../components/social/Social';

const Footer = () => {

  return (
    <div className='footer'>
        <div className='footer-top'>
            <h2 className='footer-title'>{data.footer.title}</h2>
            <span className='footer-email'> {data.footer.mail} </span>
            <span className='footer-phone'> {data.footer.phone} </span>
            <Social />
        </div>
        <br />
        <hr />
        <div className="footer-bot">
            <ul className='footer-navigation'>
                <li>
                  <a href="#home">{data.nav.a[0]}</a>
                </li>
                <li>
                  <a href="#about">{data.nav.a[1]}</a>
                </li>
                <li>
                  <a href="#techstack">{data.nav.a[2]}</a>
                </li>
                <li>
                  <a href="#projects">{data.nav.a[3]}</a>
                </li>
                <li>
                  <a href="#contact">{data.nav.a[4]}</a>
                </li>
            </ul>
            <p className='footer-p'> {data.footer.develop} </p>
        </div>
    </div>
  )
}

export default Footer