import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

import "./styles.css";
import { GetImageForIndex } from "../../functions/utils";

import pokemon_placeholder from "../../assets/img/pokemon-placeholder.png";

function CardPokemon({ ...props }) {
  const { pokemon } = props;

  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [pokemon]);

  //console.log(pokemon);

  return (
    <>
      <Col xs={12} md={6} lg={3}>
        <div className="container-card mb-4">
          <div>
            <div className="text-center">
              <h2 className="pokemon-name limit-text my-0">{pokemon.name}</h2>
              <p className="pokemon-number mb-0"># {pokemon.number}</p>
            </div>
          </div>
          <a
            className={`container-card-img position-relative my-4 container-${pokemon.types[0].type.name}`}
            href={`/details/${pokemon.name}`}
          >
            {error ? (
              <img
                alt={pokemon.name}
                title={pokemon.name}
                src={pokemon_placeholder}
              />
            ) : (
              <img
                onError={(e) => setError(true)}
                className="animation-up-down"
                alt={pokemon.name}
                title={pokemon.name}
                src={GetImageForIndex(pokemon.id)}
              />
            )}
          </a>
          <div className="w-100  d-flex justify-content-between">
            {pokemon.types.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` 
                  ${item.type.name}
                  type-item ${pokemon.types.length == 1 && "w-100"}`}
                >
                  <p className="mb-0 text-uppercase">{item.type.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Col>
    </>
  );
}

export default CardPokemon;
