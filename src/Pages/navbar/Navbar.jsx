import "./navbar.css"
import React from "react";
import { useState } from "react";
import data from "../../AppInformation/data"
import Logo from "./Logo";
import Social from "../../components/social/Social";
import { FaReact, FaTimes } from "react-icons/fa";


const NavBar = (props) => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (

    <main>
        <nav className="navigation" >
          <Logo 
              source={data.logo.src}
              title={data.logo.title}
          />
            <button 
                    className="hamburger" 
                    onClick={() => { setIsNavExpanded(!isNavExpanded);}}>
                { isNavExpanded ? <FaTimes className="fa-icon"/> : <FaReact className="fa-icon" /> }
            </button>
            <div
              className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}
            >
              <ul>
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
            </div>
            <Social />
        </nav>
    </main>
  )
}

export default NavBar