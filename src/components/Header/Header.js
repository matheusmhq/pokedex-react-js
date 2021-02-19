import React from "react";
import { Container } from "react-bootstrap";

import "./styles.css";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <div className="container-header mb-4">
      <Container fluid>
        <div className="text-center">
          <a href="/">
            <img title="Go to Home" alt="Go to Home" src={logo} />
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Header;
