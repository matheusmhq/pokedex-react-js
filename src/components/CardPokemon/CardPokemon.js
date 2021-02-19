import React from "react";
import { Col } from "react-bootstrap";

import "./styles.css";
import { GetImageForIndex } from "../../functions/utils";

function CardPokemon({ ...props }) {
  const { pokemon } = props;

  //   console.log(pokemon);

  return (
    <>
      <Col xs={12} md={6} lg={3}>
        <div className="container-card mb-5">
          <a href="#" className="container-card-img">
            <img
              alt={pokemon.name}
              title={pokemon.name}
              src={GetImageForIndex(pokemon.pokemonIndex)}
            />
            <p className="pokemon-number">N° {pokemon.number}</p>
          </a>
          <div className="px-2">
            <div>
              <h2 className="pokemon-name limit-text">{pokemon.name}</h2>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default CardPokemon;
