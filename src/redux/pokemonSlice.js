import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonList: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchPokemonStart: (state) => {
      state.loading = true;
    },
    fetchPokemonSuccess: (state, action) => {
      state.pokemonList = action.payload;
      state.loading = false;
    },
    fetchPokemonFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchPokemonStart, fetchPokemonSuccess, fetchPokemonFailure } = pokemonSlice.actions;

export const fetchPokemon = () => async (dispatch) => {
  dispatch(fetchPokemonStart());
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
    
    
    const pokemonDetails = await Promise.all(
      response.data.results.map(async (pokemon) => {
        const pokemonDetail = await axios.get(pokemon.url);
        return pokemonDetail.data;  
      })
    );

    dispatch(fetchPokemonSuccess(pokemonDetails));
  } catch (error) {
    dispatch(fetchPokemonFailure(error.message));
  }
};

export default pokemonSlice.reducer;
