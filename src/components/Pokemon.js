import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import PokemonsContext from '../context/PokemonsContext.js';

import { Link } from 'react-router-dom';

const Pokemon = ({ pks, setButton = true }) => {
  const { favorites, setFavorites } = useContext(PokemonsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  const totalPages = Math.ceil(pks.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pks.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddPokemon = (pokemon) => {
    if (!favorites.some((fav) => fav.name === pokemon.name)) {
      setFavorites(favorites.concat(pokemon));
    }
  };

  const handleDeletePokemon = (pokemon) => {
    const filtered = favorites.filter((poke) => pokemon.name !== poke.name);
    setFavorites(filtered);
  };

  return (
    <>
      {currentItems.map((pokemon) => {
        return (
          <tr key={pokemon.name}>
            <td className="text-center">{pokemon.name.toUpperCase()}</td>
            <td>
              <div className="text-center">
                {setButton ? (
                  <Button
                    onClick={() => {
                      handleAddPokemon(pokemon);
                    }}
                    type="button"
                    className="btn btn-primary mx-2">
                    Add to favorites
                  </Button>
                ) : (
                  <>
                    <Link
                      className="btn btn-success mx-2"
                      to={`/pokemon/${pokemon.name}`}>
                      View details
                    </Link>

                    <Button
                      onClick={() => {
                        handleDeletePokemon(pokemon);
                      }}
                      type="button"
                      className="btn btn-danger mx-2">
                      Delete from favorites
                    </Button>
                  </>
                )}
              </div>
            </td>
          </tr>
        );
      })}

      <nav className="mt-3">
        <ul className="pagination">
          <li
            className={`page-item ${currentPage === 1 && 'disabled'}`}
            onClick={() =>
              setCurrentPage(currentPage === 1 ? currentPage : currentPage - 1)
            }>
            <button className="page-link">Previous</button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${i + 1 === currentPage && 'active'}`}
              onClick={() => paginate(i + 1)}>
              <button className="page-link">{i + 1}</button>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === totalPages && 'disabled'}`}
            onClick={() =>
              setCurrentPage(
                currentPage === totalPages ? currentPage : currentPage + 1
              )
            }>
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pokemon;
