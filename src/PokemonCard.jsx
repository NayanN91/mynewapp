const pokemonList = [

    {
  
      name: "bulbasaur",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  
    },
  
    {
  
      name: "mew",
  
    },
  
  ];


  function PokemonCard() {
    const pokemon = pokemonList[1];
  
    return <p>{pokemon === pokemonList[0] ? <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" /> : "???"}</p>
  }
  
  export default PokemonCard;

 