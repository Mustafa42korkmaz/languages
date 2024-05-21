import React, { useState } from 'react'
import "./item.css"

const Item = ({language}) => {
  const {name, img, options} = language
  const [showLogo, setShowLogo] = useState(true)
  return (
    <div className='card' onClick={() => setShowLogo(!showLogo)}>
      {showLogo ? (
        <div>
          <img src={img} alt="" className='card-logo' />
          <h3>{name}</h3>
        </div>
      ) : (
        <ul className='list'>
          {options.map((element, i) => {
            return <li key={i}>{element}</li> 
          })}
        </ul>
      ) }
    </div>
  )
}

export default Item