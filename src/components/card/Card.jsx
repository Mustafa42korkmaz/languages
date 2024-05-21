import React from 'react'
import "./card.css"
import Item from '../item/Item.jsx'
import {languages} from "../../helpers/data.js"


const Card = () => {
  return (
    <div className='card-area-container'>
      <div className='bar'></div>
        <h1 className='card-title'>Languages</h1>
        <div className='card-container'>
        {languages.map((language, i) => {
            return <Item language={language} key={i} />
        })} 
           
        </div>
    </div>
  )
}

export default Card