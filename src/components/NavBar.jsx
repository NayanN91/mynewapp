

import { useState } from "react";
import PokemonCard from "./PokemonCard";

function NavBar({ pokemonIndex, pokemonList, onNextClick, onPreviousClick }) {
  const handleNextClick = () => {
    onNextClick(); // Appel de la fonction onNextClick fournie en tant que prop
  };

  const handlePreviousClick = () => {
    onPreviousClick(); // Appel de la fonction onPreviousClick fournie en tant que prop
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