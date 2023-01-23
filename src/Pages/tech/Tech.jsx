import React from 'react'
import data from '../../AppInformation/data'
import "./tech.css"


const Tech = () => {
  return (
    <div id="techstack" className="tech">
        <h1 className='tech-title'> My Tech Stack </h1>
        <p className='tech-desc'>Technologies i've been working with recently</p>
        <div className="stacks">
            <img src={data.stack.html} alt="html" className="stack"/>
            <img src={data.stack.css} alt="css" className="stack"/>
            <img src={data.stack.js} alt="js" className="stack"/>
            <img src={data.stack.react} alt="react" className="stack"/>
            <img src={data.stack.node} alt="node" className="stack"/>
            <img src={data.stack.sql} alt="sql" className="stack"/>
            <img src={data.stack.strapi} alt="strapi" className="stack"/>
            <img src={data.stack.vscode} alt="vscode" className="stack"/>
            <img src={data.stack.tailwind} alt="tailwind" className="stack"/>
            <img src={data.stack.mui} alt="mui" className="stack"/>
            <img src={data.stack.boot} alt="boot" className="stack"/>
            <img src={data.stack.slack} alt="slack" className="stack"/>
            <img src={data.stack.npm} alt="npm" className="stack"/>
            <img src={data.stack.git} alt="git" className="stack"/>
            <img src={data.stack.github} alt="github" className="stack"/>
            <img src={data.stack.vite} alt="vite" className="stack"/>         
        </div>
    </div>
  )
}

export default Tech