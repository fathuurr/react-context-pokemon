const PokemonCard = ({ pokemon }) => {
  return (
    pokemon && (
      <div className="card text-center">
        <img
          className="card-img-top mx-auto w-25"
          src={pokemon.sprites.front_default}
          alt="pokemon"
        />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Weight: {pokemon.weight}</li>
          <li className="list-group-item">Height: {pokemon.height}</li>
        </ul>

        <ul className="list-group list-group-flush">
          {Object.keys(pokemon.types).map((tp) => (
            <li className="list-group-item" key={tp}>
              {pokemon.types[tp].type.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default PokemonCard;
