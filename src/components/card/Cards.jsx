import React from 'react'
import "./cards.css"
import Card from './Card'
import data from '../../AppInformation/data'

const Cards = () => {
  return (
    <div className='cards'>
      <div className='cards-container'>
          <Card 
              img={data.projects.wedding.img}
              title={data.projects.wedding.title}
              desc={data.projects.wedding.desc}
              subtitle={data.projects.wedding.subtitle}
              button={data.projects.wedding.buttons}
              live={data.projects.wedding.live}
              code={data.projects.wedding.code}
          />
          <Card 
              img={data.projects.travel.img}
              title={data.projects.travel.title}
              desc={data.projects.travel.desc}
              subtitle={data.projects.travel.subtitle}
              button={data.projects.travel.buttons}
              live={data.projects.travel.live}
              code={data.projects.travel.code}
          />
          <Card 
              img={data.projects.portfolio.img}
              title={data.projects.portfolio.title}
              desc={data.projects.portfolio.desc}
              subtitle={data.projects.portfolio.subtitle}
              button={data.projects.portfolio.buttons}
              live={data.projects.portfolio.live}
              code={data.projects.portfolio.code}
          />
      
      </div>
      <div className='cards-container'>
          <Card 
              img={data.projects.notes.img}
              title={data.projects.notes.title}
              desc={data.projects.notes.desc}
              subtitle={data.projects.notes.subtitle}
              button={data.projects.notes.buttons}
              live={data.projects.notes.live}
              code={data.projects.notes.code}
          />
          <Card 
              img={data.projects.tenzies.img}
              title={data.projects.tenzies.title}
              desc={data.projects.tenzies.desc}
              subtitle={data.projects.tenzies.subtitle}
              button={data.projects.tenzies.buttons}
              live={data.projects.tenzies.live}
              code={data.projects.tenzies.code}
          />
          <Card 
              img={data.projects.meme.img}
              title={data.projects.meme.title}
              desc={data.projects.meme.desc}
              subtitle={data.projects.meme.subtitle}
              button={data.projects.meme.buttons}
              live={data.projects.meme.live}
              code={data.projects.meme.code}
          />
      
    </div>
    
    </div>
  )
}

export default Cards