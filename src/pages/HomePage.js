import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import PokemonList from '../component/PokemonList';
import { Header } from '../component/Header';
import { SearchPart } from '../component/SearchPart';
import PokemonDetail from '../component/PokemonDetail';
import { useNavigate } from 'react-router-dom';
import { usePokemonContext } from '../context/PokemonContext';

const HomePage = () => {
  const { sortedPokemons, sortPokemonsByName, loading ,  setDefault, pokemonList} = usePokemonContext();
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(false);

  const navigate = useNavigate();
  const handleGroup =() => navigate("/pokemon/Grouped");

  const filteredPokemon = search ? sortedPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  ) : sortedPokemons ;
  
 /* useEffect(()=>{
    setDefault();
  },[setDefault])*/

  const handleSort =()=>{
    sortPokemonsByName();
    setSorted(true)
  }
  const handleReset =()=>{
    setDefault();
    setSorted(false)
  }
   
  return (
    <div>
      {loading && (
        <div className='loading-spinner'>
          <ClipLoader size={50} />
        </div>
      )}
      <Header />
      <SearchPart search={search} setSearch={setSearch} /> 
      <button className='sortButton' onClick={handleSort}>Sort pokemons from A to Z</button>
      <button className='sortButton' onClick={handleReset}>Set Default</button>
      <button className='sortButton' onClick={handleGroup}>Group Pokemon By Height</button>


      {search && filteredPokemon.length > 0 ? (
        filteredPokemon.map((pokemon) => (
          <PokemonDetail key={pokemon.id} pokemon={pokemon} />
        ))
      ) : (
        <PokemonList pokemonList={sorted ? sortedPokemons : pokemonList} />
      )}
    </div>
  );
};

export default HomePage;
