import React, { useEffect, useState } from "react";
import './App.css';
import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/NavBar";
import MyTitle from "./components/MyTitle";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];

function App() {
  useEffect(() => {
    alert("Hello pokemon trainer 🙂");
  }, []);

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPokemon = (index) => {
    setPokemonIndex(index);
  };

  return (
    <>
      <div>
        <MyTitle />
        <NavBar
          handleClickPokemon={handleClickPokemon}
          pokemonList={pokemonList}
          pokemonIndex={pokemonIndex}
        />
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    </>
  );
}

export default App;