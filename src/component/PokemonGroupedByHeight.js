import React from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import PokemonDetail from './PokemonDetail';
import { useNavigate } from 'react-router-dom';

const PokemonGroupedByHeight = () => {
  const { groupedByHeight } = usePokemonContext();
  const navigate = useNavigate();
    const handleClose =() => navigate("/");


  return (
    <section>
     <button className='xButton' onClick={handleClose}>X</button>
      <h2>Pokémon Grouped by Height</h2>
      {Object.entries(groupedByHeight).map(([height, pokemons]) => (
        <div key={height} className="pokemon-height-group">
          <h3>Height: {height}</h3>
          <div className="pokemon-list">
            {pokemons.map((pokemon) => (
              <PokemonDetail key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default PokemonGroupedByHeight;
