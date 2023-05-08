import axios from 'axios';
const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=300';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const pokemonDetail = (name) => {
  const request = axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return request.then((res) => res.data);
};

export default { getAll, pokemonDetail };
