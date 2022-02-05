import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { GetImageById } from "../../functions/utils";
import "./styles.css";

const PokeEvolution = ({ data, types }) => {
  const [evolution, setEvolution] = useState(BuildChain());

  function RecursiveBuildChain(currGen) {
    const id = currGen.species.url.split("/").slice(-2, -1)[0];
    if (currGen.evolves_to.length === 0) {
      return {
        children: [],
        id,
        name: currGen.species.name,
      };
    }

    const children = currGen.evolves_to.map((child) =>
      RecursiveBuildChain(child)
    );

    return {
      children,
      id,
      name: currGen.species.name,
    };
  }

  function BuildChain() {
    const id = data.species.url.split("/").slice(-2, -1)[0];

    return {
      children:
        data.evolves_to.length === 0
          ? []
          : data.evolves_to.map((e) => RecursiveBuildChain(e)),
      id,
      name: data.species.name,
    };
  }

  return (
    <div className="container-evolution mt-4">
      <h4 className="w-100 mb-4 section-title">Evolution</h4>

      <div className="w-100 d-flex flex-column flex-md-row flex-wrap justify-content-between">
        <div className={`evolution-item ${types[0].type.name}`}>
          <figure>
            <Link to={`/details/${evolution.name}`}>
              <img src={GetImageById(evolution.id)} className="evolution-img" />
            </Link>
          </figure>
          <p className="pokemon-name">{evolution.name}</p>
          <p className="pokemon-number">
            # {evolution.id.toString().padStart(3, "0")}
          </p>
        </div>

        {evolution.children.length > 0 && (
          <>
            <div className="container-arrow">
              <FontAwesomeIcon
                className={`text-${types[0].type.name}`}
                icon={faArrowRight}
              />
            </div>
            <div className={`evolution-item ${types[0].type.name}`}>
              <figure>
                <Link to={`/details/${evolution.children[0].name}`}>
                  <img
                    src={GetImageById(evolution.children[0].id)}
                    className="evolution-img"
                  />
                </Link>
              </figure>
              <p className="pokemon-name">{evolution.children[0].name}</p>
              <p className="pokemon-number">
                # {evolution.children[0].id.toString().padStart(3, "0")}
              </p>
            </div>

            {evolution.children[0].children.length > 0 && (
              <>
                <div className="container-arrow">
                  <FontAwesomeIcon
                    className={`text-${types[0].type.name}`}
                    icon={faArrowRight}
                  />
                </div>
                <div className={`evolution-item ${types[0].type.name}`}>
                  <figure>
                    <Link
                      to={`/details/${evolution.children[0].children[0].name}`}
                    >
                      <img
                        src={GetImageById(evolution.children[0].children[0].id)}
                        className="evolution-img"
                      />
                    </Link>
                  </figure>
                  <p className="pokemon-name">
                    {evolution.children[0].children[0].name}
                  </p>
                  <p className="pokemon-number">
                    #{" "}
                    {evolution.children[0].children[0].id
                      .toString()
                      .padStart(3, "0")}
                  </p>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PokeEvolution;
