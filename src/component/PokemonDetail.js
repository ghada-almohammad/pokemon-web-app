import React from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonDetail = ({ pokemon }) => {
  const navigate = useNavigate();
  if (!pokemon) return <p>No Pokémon selected.</p>;
    const handleClose =() => navigate("/");

  return (
    <div className='pokemonDetails'>
      <button className='xButton' onClick={handleClose}>X</button>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
    </div>
  );
};

export default PokemonDetail;
