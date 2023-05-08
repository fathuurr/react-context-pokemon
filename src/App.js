import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import PokemonsList from './components/PokemonList.js';
import Favorite from './components/Favorite';
import NotFound from './components/NotFound.js';
import Footer from './components/Footer';
import PokemonDetails from './components/PokemonDetails.js';

import { PokemonsContextProvider } from './context/PokemonsContext.js';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="nav justify-content-center mb-3">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link active" to="/pokemons">
                Pokemons
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link active" to="/favorites">
                Favorites
              </NavLink>
            </li>
          </ul>

          <PokemonsContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pokemons" element={<PokemonsList />} />
              <Route path="/favorites" element={<Favorite />} />
              <Route path="/pokemon/:name" element={<PokemonDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PokemonsContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
