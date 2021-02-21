import React from "react";

import { DetermineGenderRate } from "../../functions/utils";

const PokeInfo = ({
  height,
  capture_rate,
  weight,
  abilities,
  gender_rate,
  habitat,
}) => {
  return (
    <div className="container-info d-flex flex-wrap my-4">
      <div className="info-item">
        <h4>Height</h4>
        <p>{Math.round(height * 10) / 100} m</p>
      </div>

      <div className="info-item">
        <h4>Capture rate</h4>
        <p>{Math.round(capture_rate * 100) / 100}%</p>
      </div>

      <div className="info-item">
        <h4>Weight</h4>
        <p>{Math.round(weight * 10) / 100} kg</p>
      </div>

      <div className="info-item">
        <h4>Abilities</h4>
        <p>{abilities != null ? abilities : "-"}</p>
      </div>

      <div className="info-item mb-0">
        <h4>Gender</h4>
        <p>{gender_rate != null ? DetermineGenderRate(gender_rate) : "-"}</p>
      </div>

      <div className="info-item mb-0">
        <h4>Habitat</h4>
        <p>{habitat != null ? habitat : "-"}</p>
      </div>
    </div>
  );
};

export default PokeInfo;
