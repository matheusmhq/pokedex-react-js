import React from "react";
import { Container } from "react-bootstrap";

import "./styles.css";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header className="container-header mb-5">
      <Container fluid>
        <div className="text-center">
          <a href="/">
            <img title="Go to home" alt="Go to home" src={logo} />
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
