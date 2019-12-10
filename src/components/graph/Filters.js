import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getStatsHeadersLabel } from "../../utils";

const getFilteredLabel = data => {
  const headers = Object.keys(data[0]);
  return headers.filter(header => !getStatsHeadersLabel().includes(header));
};

const getValuesPerHeaders = data => {
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
  filtersValuePerHeaders.map(filter => ({
    header: filter.header,
    value: undefined
  }));

const Filters = ({ data, setFilters, filters: appliedFilters }) => {
  const [filtersValuePerHeaders, setfiltersValuePerHeaders] = useState([]);
  useEffect(() => setfiltersValuePerHeaders(getValuesPerHeaders(data)), [data]);
  useEffect(() => setFilters(getInitialFilters(filtersValuePerHeaders)), [
    setFilters,
    filtersValuePerHeaders
  ]);

  const updateFilter = (header, value) => {
    const updatedFilters = appliedFilters.map(filter => {
      if (filter.header === header) {
        return { ...filter, value };
      }
      return filter;
    });

    setFilters(updatedFilters);
  };

  const getCurrentFilterValue = (filterValues, filters) => {
    const currentFilter = filters.find(
      filter => filter.header === filterValues.header
    );

    if (!currentFilter) {
      return { value: undefined, label: "No filter" };
    }

    return filterValues.values.find(
      filterValue => filterValue.value === currentFilter.value
    );
  };

  return (
    appliedFilters &&
    filtersValuePerHeaders.map(filterValues => (
      <div key={filterValues.header}>
        <label>{filterValues.header}</label>
        <Select
          options={filterValues.values}
          onChange={option => updateFilter(filterValues.header, option.value)}
          value={getCurrentFilterValue(filterValues, appliedFilters)}
        />
      </div>
    ))
  );
};

export default Filters;
