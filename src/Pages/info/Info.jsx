import React from 'react'
import "./info.css"
import data from '../../AppInformation/data'
import Item from '../../components/item/Item'

const Info = () => {
  return (
    <div id="about" className="info">
        <div className="about">
            <h1 className='about-title'>{data.info.titles[0]}</h1>
            <p className='about-desc'>{data.info.desc}</p>
        </div>
        <div className="work">
            <h1 className='work-title'> {data.info.titles[1]}</h1>
            <div className="items">
                <Item 
                    className="item"
                    title={data.work1.title}
                    badge={data.work1.badge}
                    span1={data.work1.span1}
                    a={data.work1.a}
                    href={data.work1.href}
                    country={data.work1.country}
                    date={data.work1.date}
                    description={data.work1.description}
                />
                <hr className='line-separator' />
                <Item 
                    className="item"
                    title={data.work2.title}
                    badge={data.work2.badge}
                    span1={data.work2.span1}
                    a={data.work2.a}
                    href={data.work2.href}
                    country={data.work2.country}
                    date={data.work2.date}
                    description={data.work2.description}
                />
            </div>
        </div>
        <div className="education">
            <h1 className='title-education'>{data.info.titles[2]}</h1>
            <div className="items">
                <Item 
                    className="item"
                    title={data.edu1.title}
                    badge={data.edu1.badge}
                    span1={data.edu1.span1}
                    a={data.edu1.a}
                    href={data.edu1.href}
                    country={data.edu1.country}
                    date={data.edu1.date}
                    description={data.edu1.description}
                />
                <hr className='line-separator' />
                <Item 
                    className="item"
                    title={data.edu2.title}
                    badge={data.edu2.badge}
                    span1={data.edu2.span1}
                    a={data.edu2.a}
                    href={data.edu2.href}
                    country={data.edu2.country}
                    date={data.edu2.date}
                    description={data.edu2.description}
                />
                <Item 
                    className="item"
                    title={data.edu3.title}
                    badge={data.edu3.badge}
                    span1={data.edu3.span1}
                    a={data.edu3.a}
                    href={data.edu3.href}
                    country={data.edu3.country}
                    date={data.edu3.date}
                    description={data.edu3.description}
                />
            </div>
        </div>
    </div>
    
  )
}

export default Info




/*
    <div className='info'>
        <div className='about'>
            <h1 className='title-me'>{data.info.titles[0]}</h1>
            <p className='about-desc'>{data.info.desc}</p>
        </div>
        <div className="work">
            <h1 className='title-exp'> {data.info.titles[1]}</h1>
        </div>
        <div className='items'>
            <Item 
                className="item1"
                title={data.work1.title}
                badge={data.work1.badge}
                span1={data.work1.span1}
                a={data.work1.a}
                href={data.work1.href}
                country={data.work1.country}
                date={data.work1.date}
                description={data.work1.description}
            />
        </div>
        <div className="education">
            <h1 className='title-education'>{data.info.titles[2]}</h1>
        </div>
    </div>
*/