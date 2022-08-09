import { useState, useEffect } from 'react';

import Pokemon from './Pokemon.js';
import pokemonService from '../services/pokemons.js';

import { Table } from 'react-bootstrap';

const PokemonsList = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setLoading(true);

    pokemonService.getAll().then((res) => {
      setPokemons(res.results);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center">Pokemons List</h1>

      {loading ? (
        <div className="spinner-border text-primary text-center d-block mx-auto" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        ''
      )}
      <table className="table table-striped">
        <thead>
          <tr className="text-center">
            <th>Pokemon</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Pokemon pks={pokemons} />
        </tbody>
      </table>
    </div>
  );
};

export default PokemonsList;
