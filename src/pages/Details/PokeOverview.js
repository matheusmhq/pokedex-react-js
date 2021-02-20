import React, { useState } from "react";

import pokeball_white from "../../assets/img/pokeball-white.png";

const PokeOverview = ({ flavor_text_sword, flavor_text_shield }) => {
  const [version, setVersion] = useState("sword");

  return (
    <>
      <h3 className="text-center text-md-left">
        {version == "sword" ? flavor_text_sword : flavor_text_shield}
      </h3>

      <div className="container-versions d-flex justify-content-center justify-content-md-start mt-3">
        <button
          className={`${version == "sword" && version} mr-2`}
          onClick={() => setVersion("sword")}
        >
          <img src={pokeball_white} />
        </button>
        <button
          className={`${version == "shield" && version}`}
          onClick={() => setVersion("shield")}
        >
          <img src={pokeball_white} />
        </button>
      </div>
    </>
  );
};

export default PokeOverview;
