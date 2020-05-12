import Select from "react-select";
import { useRequests } from "contexts/requests";

export default function Filters() {
  const [state, dispatch] = useRequests();

  const handleFilterUpdate = (selectedOption, filter) => {
    dispatch({
      type: "FILTER_REQUESTS",
      payload: { [filter]: selectedOption },
    });
  };

  const { filters, options } = state;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
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
    </div>
  );
}
