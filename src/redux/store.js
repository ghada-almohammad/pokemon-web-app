import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({serializableCheck:false})
  //middleware: (getDefaultMiddleware)=> getDefaultMiddleware(thunk)

});

export default store;
