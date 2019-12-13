import React, { useState } from "react";
import Radar from "./Radar";
import Motivation from "./Motivation";
import EtatEsprit from "./EtatEsprit";
import Archetype from "./Archetype";
import Filters from "./Filters";
import { withFileContext } from "../../context/FileContext";

const Graph = ({ fileData: data, history }) => {
  const [filters, setFilters] = useState([]);

  if (!data || data.length === 0) {
    history.push("/upload");
    return "";
  }

  let filteredData = data;
  filters.forEach(filter => {
    filteredData = filteredData.filter(
      elem => !filter.value || elem[filter.header] === filter.value
    );
  });

  return (
    <div className="App" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", height: "800px" }}>
        <div style={{ height: "400px", width: "100%" }}>
          <Radar data={filteredData} />
          <Motivation data={filteredData} />
        </div>
        <div style={{ height: "400px", width: "100%" }}>
          <EtatEsprit data={filteredData} />
          <Archetype data={filteredData} />
        </div>
      </div>
      <div>Number of people: {filteredData.length}</div>
      <Filters data={data} setFilters={setFilters} filters={filters} />
    </div>
  );
};

export default withFileContext(Graph);
