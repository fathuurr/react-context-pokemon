const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);

  return (
    pokemon && (
      <div className="card text-center bg-primary">
        <img className="card-img-top mx-auto w-25" src={pokemon.sprites.front_default} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Weight: {pokemon.weight}</li>
          <li className="list-group-item">Height: {pokemon.height}</li>
        </ul>
        <ul className="list-group list-group-flush">
          {Object.keys(pokemon.abilities).map((ab) => (
            <li className="list-group-item" key={ab}>
              {pokemon.abilities[ab].ability.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default PokemonCard;
