

const NavBar = (props) => {
const { pokemonIndex, handleClickPokemon, pokemonList } = props;

setTimeout(() => {
  if (pokemonList[pokemonIndex].name === "Pikachu") alert("Pika Pikachu !!!");
}, "100")

  return (
    <>
    {pokemonList.map((pokemon, index) => (
      <button key={index} onClick={() => handleClickPokemon(index)}>
        {pokemon.name}
      </button>
    ))}
  </>
  )
};

export default NavBar;