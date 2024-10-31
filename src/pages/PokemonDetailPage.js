import React from 'react';
import { useLocation } from 'react-router-dom';
import PokemonDetail from '../component/PokemonDetail';

const PokemonDetailPage = () => {
  const location = useLocation();
  const { pokemon } = location.state;

  return (
    <div>
    <PokemonDetail pokemon={pokemon} />
    </div>
  );
};

export default PokemonDetailPage;
