import { useState, useEffect } from 'react';

import Pokemon from './Pokemon.js';
import pokemonService from '../services/pokemons.js';
const storageName = 'POKEMON_DATA';
const PokemonsList = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  useEffect(() => {
    const pokemonsData = JSON.parse(localStorage.getItem(storageName));
    if (pokemonsData) {
      setLoading(true);
      const filterPokemon = pokemonsData.filter((value) => {
        return value.name
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase());
      });
      setPokemons(filterPokemon);
      setLoading(false);
    }
  }, [debouncedSearchTerm]);
  useEffect(() => {
    setLoading(true);

    pokemonService
      .getAll()
      .then((res) => {
        setPokemons(res.results);
        localStorage.setItem(storageName, JSON.stringify(res.results));
        setLoading(false);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type={'text'}
        className="form-control mb-3"
        onChange={handleSearch}
      />
      {loading ? (
        <div
          className="spinner-border text-primary text-center d-block mx-auto"
          role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <table className="table table-striped table-bordered ">
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
        </>
      )}
    </div>
  );
};

export default PokemonsList;
