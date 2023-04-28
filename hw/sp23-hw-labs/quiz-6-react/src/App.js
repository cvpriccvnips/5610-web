import React, { useState, useEffect } from "react";
import shuffle from "lodash.shuffle";
import "./App.css";

// image for the pokemon
// https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png

const pokemon = [
  { id: "004", name: "charizard" },
  { id: "010", name: "caterpie" },
  { id: "077", name: "ponyta" },
  { id: "108", name: "lickitung" },
  { id: "132", name: "ditto" },
  { id: "133", name: "eevee" },
];
const doublePokemon = shuffle([...pokemon, ...pokemon]);

export default function App() {
  const [opened, setOpened] = useState([]);

  function flipCard(index) {
    // if same card was clicked
    if (opened.includes(index)) return;

    setOpened([...opened, index]);
  }

  return (
    <div className="app">
      <p>
        0 <strong>moves</strong>
      </p>

      <div className="cards">
        {doublePokemon.map((pokemon, index) => {
          let isFlipped = false;

          if (opened.includes(index)) {
            isFlipped = true;
          }

          return (
            <PokemonCard
              key={index}
              index={index}
              pokemon={pokemon}
              isFlipped={isFlipped}
              flipCard={flipCard}
            />
          );
        })}
      </div>
    </div>
  );
}

function PokemonCard({ index, pokemon, isFlipped, flipCard }) {
  return (
    <button
      className={`pokemon-card ${isFlipped ? "flipped" : ""}`}
      onClick={() => flipCard(index)}
    >
      <div className="inner">
        <div className="front">
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`}
            alt={pokemon.name}
            width="100"
          />
        </div>
        <div className="back">?</div>
      </div>
    </button>
  );
}
