import React from 'react'
import "./header.css"
import reactLogo from "../../assets/reactLogo.svg"

const Header = () => {
  return (
    <div className='logo-container'>
        <img src={reactLogo} alt="" className='logo-react' />
    </div>
  )
}

export default Header