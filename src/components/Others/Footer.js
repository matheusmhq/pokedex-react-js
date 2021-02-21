import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <p className="mr-1 credits-text">Developed by</p>
        <a className="mhq" target="_blank" href="https://matheusmhq.com.br/">
          Matheus Henrique
        </a>
      </div>
      <a
        className="view-code"
        target="_blank"
        href="https://github.com/matheusmhq/pokedex-react-js"
      >
        View code on Github
        <FontAwesomeIcon className="ml-2" icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
