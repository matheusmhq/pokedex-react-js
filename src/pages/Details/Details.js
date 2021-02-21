import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import LoadingDetails from "../../components/Loading/LoadingDetails";
import Header from "../../components/Header/Header";
import PokeCard from "../../components/Pokemon/PokeCard";
import PokeOverview from "../../components/Pokemon/PokeOverview";
import PokeInfo from "../../components/Pokemon/PokeInfo";
import PokeStats from "../../components/Pokemon/PokeStats";
import api from "../../services/api";

function Details({ history, ...props }) {
  const { name } = props.match.params;

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    function LoadPokemon() {
      api
        .get(`/pokemon/${name}`)
        .then((response) => {
          if (response.status == 200) {
            console.log("LoadDetails success");
            console.log(response.data);
            LoadSpecies(response.data);
          }
        })
        .catch((error) => {
          console.log("LoadDetails error " + error);
        });
    }

    if (name == undefined) history.push({ pathname: "/" });
    LoadPokemon();
  }, []);

  async function LoadSpecies(poke) {
    let response = await api.get(`/pokemon-species/${name}`);

    console.log(response.data);

    var flavor_text_sword = "";
    var flavor_text_shield = "";
    var flavor_text_default = "";
    response.data.flavor_text_entries.map((item) => {
      if (item.language.name != "en") return false;
      if (item.version.name == "sword") {
        flavor_text_sword = item.flavor_text;
      } else if (item.version.name == "shield") {
        flavor_text_shield = item.flavor_text;
      }
      flavor_text_default = item.flavor_text;
    });

    var abilities = "";
    poke.abilities.map((item, index) => {
      abilities += `${item.ability.name}${
        poke.abilities.length == index + 1 ? "" : ", "
      }`;
    });

    var obj = {
      id: poke.id,
      name: poke.name,
      types: poke.types,
      flavor_text_sword,
      flavor_text_shield,
      flavor_text_default,
      height: poke.height,
      weight: poke.weight,
      abilities,
      gender_rate: response.data.gender_rate,
      capture_rate: response.data.capture_rate,
      habitat: response.data.habitat.name,
      stats: poke.stats,
    };

    setDetails(obj);
    setLoading(false);
  }

  return (
    <>
      <div>
        <Header />
        <Container className="text-light mb-4">
          {loading ? (
            <LoadingDetails />
          ) : (
            <>
              <Row>
                <PokeCard
                  name={details.name}
                  id={details.id}
                  types={details.types}
                  click={false}
                />

                <Col xs={12} md={6}>
                  <div>
                    <div>
                      <PokeOverview
                        flavor_text_sword={details.flavor_text_sword}
                        flavor_text_shield={details.flavor_text_shield}
                        flavor_text_default={details.flavor_text_default}
                      />
                      <PokeInfo
                        height={details.height}
                        capture_rate={details.capture_rate}
                        weight={details.weight}
                        abilities={details.abilities}
                        gender_rate={details.gender_rate}
                        habitat={details.habitat}
                      />
                    </div>
                  </div>
                  <PokeStats stats={details.stats} types={details.types} />
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
    </>
  );
}

export default Details;
