import React from 'react'
import Cards from '../../components/card/Cards'
import "./projects.css"

const Projects = () => {
  return (
    <div id="projects" className='projects'>
      <h1 className='projects-title'> Projects </h1>
      <p className='projects-desc'>Things I've built so far</p>
      <div className="cards-container">
        <Cards />
      </div>
    </div>
  )
}

export default Projects