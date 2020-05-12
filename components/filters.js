import Select from "react-select";
import { useState } from "react";
import { useRequests } from "contexts/requests";

export default function Filters() {
  const [state, dispatch] = useRequests();

  const handleFilterUpdate = (selectedOption, filter) => {
    dispatch({
      type: "FILTER_REQUESTS",
      payload: { [filter]: selectedOption || [] },
    });
  };

  const handleMaxPriceChange = (event) => {
    dispatch({
      type: "FILTER_PRICE",
      payload: event.target.value,
    });
  };

  const { filters, options, maxPriceFilter } = state;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      {Object.entries(options).map(([filter, options]) => (
        <Select
          key={filter}
          isMulti
          placeholder={filter}
          value={filters[filter]}
          options={options.map((option) => ({ label: option, value: option }))}
          onChange={(selected) => handleFilterUpdate(selected, filter)}
        />
      ))}

      <input
        type="number"
        className="px-2"
        min="0"
        value={maxPriceFilter}
        onChange={handleMaxPriceChange}
        placeholder="Max Unit Price"
      />
    </div>
  );
}
