export const groupPokemonsByHeight = (pokemonList) => {
    return pokemonList.reduce((acc, pokemon) => {
      const height = pokemon.height;
      if (!acc[height]) {
        acc[height] = [];
      }
      acc[height].push(pokemon);
      return acc;
    }, {});
  };
  