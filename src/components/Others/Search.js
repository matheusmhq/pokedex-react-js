import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import "./styles.css";

const Search = ({ history, ...props }) => {
  const { query } = props;
  const [searchQuery, setSeachQuery] = useState(query || "");

  useEffect(() => {
    history.push(`/${searchQuery}`);
  }, [searchQuery]);

  return (
    <div className="container-search mb-4">
      <Form.Label>Name or number</Form.Label>
      <Form.Control
        onChange={(e) => setSeachQuery(e.currentTarget.value)}
        value={searchQuery}
        placeholder="Ex. Bulbasaur"
      />
    </div>
  );
};

export default Search;
