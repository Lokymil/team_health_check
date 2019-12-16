import React, { useState, useEffect } from "react";
import Select from "react-select";
import { getStatsHeadersLabel } from "../../utils";

const getFiltersHeader = data => {
  const headers = Object.keys(data[0]);
  return headers.filter(header => !getStatsHeadersLabel().includes(header));
};

const getValuesPerHeaders = data => {
  // Create initial filters with label and empty values
  const filtersValuePerHeaders = getFiltersHeader(data).map(header => ({
    header,
    values: []
  }));

  // Add possible uniq values to filters according to data
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

  // Add default filter as no filter applied
  filtersValuePerHeaders.forEach(filter => {
    filter.values.push({
      value: undefined,
      label: "No filter"
    });
  });

  return filtersValuePerHeaders;
};

const getInitialFilters = filters =>
  filters.map(filter => ({
    header: filter.header,
    value: undefined
  }));

const Filters = ({
  data,
  setFilters: setAppliedFilters,
  filters: appliedFilters
}) => {
  const [initialFilters, setInitialFilters] = useState([]);
  useEffect(() => setInitialFilters(getValuesPerHeaders(data)), [data]);
  useEffect(() => setAppliedFilters(getInitialFilters(initialFilters)), [
    setAppliedFilters,
    initialFilters
  ]);

  const updateFilter = (header, value) => {
    const updatedFilters = appliedFilters.map(filter => {
      if (filter.header === header) {
        return { ...filter, value };
      }
      return filter;
    });

    setAppliedFilters(updatedFilters);
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
    initialFilters.map(filterValues => (
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
