import React, { useState } from "react";
import Radar from "./radar/Radar";
import Motivation from "./motivation/Motivation";
import Mindset from "./mindset/Mindset";
import Archetype from "./archetype/Archetype";
import Filters from "./Filters";
import { useFileContext } from "../../context/FileContext";
import "./Graph.scss";
import DownloadResult from "./download/DownloadResult";

function Graph({ history }) {
  const [filters, setFilters] = useState([]);
  const { fileData: data } = useFileContext();

  if (!data || data.length === 0) {
    history.push("/visualize/upload");
    return null;
  }

  let filteredData = data;
  filters.forEach((filter) => {
    filteredData = filteredData.filter(
      (elem) => !filter.value || elem[filter.header] === filter.value
    );
  });

  return (
    <div className="graph__wrapper">
      <div className="graph__title-wrapper">
        <h1>Visualization</h1>
        <DownloadResult data={filteredData} />
      </div>
      <div className="graph__content">
        <h2>Motivation</h2>
        <div className="graph__row">
          <div className="graph__graph">
            <Radar data={filteredData} />
          </div>
          <div className="graph__graph">
            <Motivation data={filteredData} />
          </div>
        </div>
        <h2>Mindset</h2>
        <div className="graph__row">
          <div className="graph__graph">
            <Mindset data={filteredData} />
          </div>
          <div className="graph__graph">
            <Archetype data={filteredData} />
          </div>
        </div>
      </div>
      <div>Team size: {filteredData.length}</div>
      <Filters data={data} setFilters={setFilters} filters={filters} />
    </div>
  );
}

export default Graph;
