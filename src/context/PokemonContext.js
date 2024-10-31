import React, { useState, useEffect, createContext, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from '../redux/pokemonSlice';
import { groupPokemonsByHeight } from '../utils/groupByHeight';


export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const dispatch = useDispatch();
    const { pokemonList, loading } = useSelector((state) => state.pokemon);
    const [sortedPokemons, setSortedPokemons] = useState([]);
    const [groupedByHeight, setGroupedByHeight] = useState({});
    const [originalPokemons, setOriginalPokemons] = useState([]);

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    useEffect(() => {
    
    setSortedPokemons(pokemonList);
    setOriginalPokemons(pokemonList);
    setGroupedByHeight(groupPokemonsByHeight(pokemonList));

    }, [pokemonList]);

    const sortPokemonsByName = () => {
        const sorted = [...pokemonList].sort((a, b) => a.name.localeCompare(b.name));
        setSortedPokemons(sorted);       
    
    };
    const setDefault = ()=>{
        setSortedPokemons(originalPokemons);
        
    }

    return (
        <PokemonContext.Provider value={{ sortedPokemons, loading, sortPokemonsByName, setDefault,  pokemonList, groupedByHeight }}>
            {children} 
        </PokemonContext.Provider>
    );
};

export const usePokemonContext = () => useContext(PokemonContext);
