import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

import "./styles.css";
import { GetImageFromId } from "../../functions/utils";

import pokemon_placeholder from "../../assets/img/pokemon-placeholder.png";

const PokeCard = ({ name, id, types, click }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [id]);

  return (
    <div className="container-card mb-4">
      <div>
        <div className="text-center">
          <h2 className="pokemon-name limit-text my-0">{name}</h2>
          <p className="pokemon-number mb-0">
            # {id.toString().padStart(3, "0")}
          </p>
        </div>
      </div>
      <figure
        className={`container-card-img position-relative my-4 container-${types[0].type.name}`}
      >
        <a href={click ? `/details/${name}` : "javascript:void"}>
          {error ? (
            <img alt={name} title={name} src={pokemon_placeholder} />
          ) : (
            <img
              onError={(e) => setError(true)}
              className="animation-up-down"
              alt={name}
              title={name}
              src={GetImageFromId(id)}
            />
          )}
        </a>
      </figure>
      <div className="w-100  d-flex justify-content-between">
        {types.map((item, index) => {
          return (
            <div
              key={index}
              className={` 
                  ${item.type.name}
                  type-item ${types.length == 1 && "w-100"}`}
            >
              <p className="mb-0 text-uppercase">{item.type.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokeCard;
