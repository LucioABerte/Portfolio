import React from 'react'

const Logo = (props) => {
  return (
    <div className='logo'>
        <img 
            className="logo-img" 
            src={props.source} 
            alt="logo" 
        />
        <h2 className='logo-title'>{props.title}</h2> 
    </div>
  )
}

export default Logo