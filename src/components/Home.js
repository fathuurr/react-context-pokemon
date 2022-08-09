import { useContext } from 'react';
import PokemonsContext from '../context/PokemonsContext.js';

const Home = () => {
  const { favorites } = useContext(PokemonsContext);

  return (
    <div>
      <h1 className="text-center">Welcome to React Context - Pokestore</h1>

      {favorites.length === 0 ? (
        <h2 className="text-center my-4">There are no pokemons favorites at the moment</h2>
      ) : (
        <h2 className="text-center my-4">
          There are {favorites.length} {favorites.length === 1 ? 'favorite' : 'favorites'} at the moment
        </h2>
      )}
    </div>
  );
};

export default Home;
