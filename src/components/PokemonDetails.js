import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import pokemonService from '../services/pokemons.js';

import PokemonCard from './PokemonCard.js';

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    pokemonService.pokemonDetail(name).then((res) => {
      setPokemon(res);
    });
  }, [name]);

  return (
    <div>
      <h1 className="text-center mb-4">Details for {name.toUpperCase()}</h1>

      <PokemonCard pokemon={pokemon} />

      <div className="text-center">
        <Link className="btn btn-success mx-2 my-4" to="/favorites">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetails;
