import React from 'react'
import logo from "../assets/logo.png" ;
import { usePokemonContext } from '../context/PokemonContext';


export const Header = () => {
  const {sortedPokemons} = usePokemonContext();
const pokemonLength = sortedPokemons.length;

  return (
    <div className='logo'>
        <img  src={logo} alt='pokemon logo'/>
        <h1> Generation 1</h1>
        <p> {pokemonLength} pokemons</p>
    </div>
  )
}


