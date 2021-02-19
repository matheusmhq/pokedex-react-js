import React from "react";

import Routes from "../src/routes";

function App() {
  //Remove console.log in production
  if (process.env.NODE_ENV !== "development") console.log = () => {};

  return <Routes />;
}

export default App;
