import './App.css'
import PokemonCard from "./components/PokemonCard.jsx"
import NavBar from "./components/NavBar"
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
  
    const handleNextClick = () => {
      setPokemonIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);
    };
  
    const handlePreviousClick = () => {
      setPokemonIndex((prevIndex) =>
        prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div>
        <NavBar
          pokemonIndex={pokemonIndex}
          pokemonList={pokemonList}
          onNextClick={handleNextClick}
          onPreviousClick={handlePreviousClick}
        />
      </div>
    );
  }
  
export default App