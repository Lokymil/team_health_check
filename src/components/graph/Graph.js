import React, { useState } from "react";
import Radar from "./radar/Radar";
import Motivation from "./motivation/Motivation";
import EtatEsprit from "./EtatEsprit";
import Archetype from "./Archetype";
import Filters from "./Filters";
import { withFileContext } from "../../context/FileContext";
import "./Graph.scss";

const Graph = ({ fileData: data, history }) => {
  const [filters, setFilters] = useState([]);

  if (!data || data.length === 0) {
    history.push("/upload");
    return "";
  }

  let filteredData = data;
  filters.forEach((filter) => {
    filteredData = filteredData.filter(
      (elem) => !filter.value || elem[filter.header] === filter.value
    );
  });

  return (
    <div className="graph__wrapper">
      <h1>Visualization</h1>
      <div className="graph__content">
        <div className="graph__row">
          <div className="graph__graph">
            <Radar data={filteredData} />
          </div>
          <div className="graph__graph">
            <Motivation data={filteredData} />
          </div>
        </div>
        <div className="graph__row">
          <div className="graph__graph">
            <EtatEsprit data={filteredData} />
          </div>
          <div className="graph__graph">
            <Archetype data={filteredData} />
          </div>
        </div>
      </div>
      <div>Number of people: {filteredData.length}</div>
      <Filters data={data} setFilters={setFilters} filters={filters} />
    </div>
  );
};

export default withFileContext(Graph);
