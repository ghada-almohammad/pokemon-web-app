import React from 'react'
import logo from "../assets/logo.png" ;



export const Header = () => {
  return (
    <div className='logo'>
        <img  src={logo} alt='pokemon logo'/>
        <h1> Generation 1</h1>
        <p> 151 pokemons</p>
    </div>
  )
}


