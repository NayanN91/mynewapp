


import PokemonCard from "./components/PokemonCard.jsx"



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

function App () {
  return (

    <>
      <PokemonCard image = {pokemonList[0].imgSrc} name = {pokemonList[0].name}
       />
    </>

  )
}

export default App;
