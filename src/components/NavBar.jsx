

import { useState } from "react";
import PokemonCard from "./PokemonCard";

function NavBar({ pokemonIndex, pokemonList, onNextClick, onPreviousClick }) {
  const handleNextClick = () => {
    onNextClick(); 
  };

  const handlePreviousClick = () => {
    onPreviousClick(); 
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={handlePreviousClick}>Précédent</button>
      <button onClick={handleNextClick}>Suivant</button>
    </div>
  );
}

export default NavBar;