import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../../components/Header/Header";
import api from "../../services/api";

function Details({ history, ...props }) {
  const { name } = props.match.params;

  const [details, setDetails] = useState({});

  useEffect(() => {
    function LoadDetails() {
      api
        .get(`/pokemon/${name}`)
        .then((response) => {
          if (response.status == 200) {
            console.log("LoadDetails success");
            console.log(response.data);
            setDetails(response.data);
          }
        })
        .catch((error) => {
          console.log("LoadDetails error " + error);
        });
    }

    if (name == undefined) history.push({ pathname: "/" });
    LoadDetails();
  }, []);

  return (
    <div>
      <Header />
      <Container className="text-light">
        <p>details</p>
        <p>{details.name}</p>
      </Container>
    </div>
  );
}

export default Details;
