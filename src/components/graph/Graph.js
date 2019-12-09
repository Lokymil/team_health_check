import React, { useState } from "react";
import Radar from "./Radar";
import Motivation from "./Motivation";
import EtatEsprit from "./EtatEsprit";
import Archetype from "./Archetype";
import Filters from "./Filters";

const Graph = ({ data }) => {
  const [filters, setFilters] = useState({});
  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", height: "800px" }}>
        <div style={{ height: "400px", width: "100%" }}>
          <Radar data={data} />
          <Motivation data={data} />
        </div>
        <div style={{ height: "400px", width: "100%" }}>
          <EtatEsprit data={data} />
          <Archetype data={data} />
        </div>
      </div>
      <Filters data={data} setFilters={setFilters} filters={filters} />
    </div>
  );
};

export default Graph;
