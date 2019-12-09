import React, { useState, useEffect } from "react";
import Select from "react-select";
import { headersLabel } from "../../utils";

const getFilteredLabel = data => {
  const headers = Object.keys(data[0]);
  return headers.filter(header => !headersLabel.includes(header));
};

const getValuesGetHeaders = data => {
  const filtersValuePerHeaders = getFilteredLabel(data).map(header => ({
    header,
    values: []
  }));

  data.forEach(elem => {
    filtersValuePerHeaders.forEach(filter => {
      const value = elem[filter.header];
      const hasValue = filter.values.some(
        filterValue => filterValue.value === value
      );
      if (!hasValue) {
        filter.values.push({ value, label: value });
      }
    });
  });

  filtersValuePerHeaders.forEach(filter => {
    filter.values.push({
      value: undefined,
      label: "No filter"
    });
  });

  return filtersValuePerHeaders;
};

const getInitialFilters = filtersValuePerHeaders =>
  filtersValuePerHeaders.reduce(
    (acc, filter) => ({ ...acc, [filter.header]: undefined }),
    {}
  );

const Filters = ({ data, setFilters, filters }) => {
  const [filtersValuePerHeaders, setfiltersValuePerHeaders] = useState([]);
  useEffect(() => setfiltersValuePerHeaders(getValuesGetHeaders(data)), [data]);
  useEffect(() => setFilters(getInitialFilters(filtersValuePerHeaders)), [
    setFilters,
    filtersValuePerHeaders
  ]);

  return (
    <>
      <div>Number of people: {data.length}</div>
      {filters &&
        filtersValuePerHeaders.map(filter => (
          <>
            <label>{filter.header}</label>
            <Select
              key={filter.header}
              options={filter.values}
              //   onChange={option => setIsJunior(option.value)}
              value={filters[filter.header]}
            />
          </>
        ))}
    </>
  );
};

export default Filters;
