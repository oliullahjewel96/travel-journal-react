import React from "react";
import Nav from "./components/Nav";
import Travelled from "./components/Travelled";
import data from "./data";
function App() {
  const travelledPlaces = data.map((place) => {
    return <Travelled place={place} />;
  });
  return (
    <div className="App">
      <Nav />
      {travelledPlaces}
    </div>
  );
}

export default App;
