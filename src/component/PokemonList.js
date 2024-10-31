import React from 'react';
import { Link } from 'react-router-dom';




const PokemonList = ({ pokemonList }) => {
  if (!pokemonList || pokemonList.length === 0) {
    return <p>No Pokémon data available</p>; 
  }
 
  return (
    
    <ul className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <li key={pokemon.name} className="pokemon-item">
          <Link to={`/pokemon/${pokemon.name}`} state={{ pokemon }}>
            <img src={pokemon.sprites.front_default || '/default-image.png'} alt={pokemon.name || "Unknown Pokémon" } />
            <p>{pokemon.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;

