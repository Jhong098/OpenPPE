const STATUS_TO_COLOR = {
  canceled: "bg-red-",
  open: "bg-green-",
  claimed: "bg-blue-",
};

const StatusBadge = ({ status }) => {
  return (
    <p className={`badge ${STATUS_TO_COLOR[status] + "300"}`}>
      <span
        className={`w-3 h-3 mr-1 rounded-lg ${STATUS_TO_COLOR[status] + "500"}`}
      ></span>
      <span className="text-xs font-semibold">{status}</span>
    </p>
  );
};

export default function RequestCard({ data }) {
  const {
    category,
    location,
    name,
    quantity,
    requested_at,
    requestor,
    size,
    unit_cost,
    status,
  } = data;
  return (
    <div className="card relative hover:opacity-75">
      <div className="flex w-full items-center justify-between">
        <StatusBadge status={status} />
        <button className="hover:opacity-75 hover:underline">
          #{category}
        </button>
      </div>
      <h2 className="text-lg font-semibold">
        {name} x {quantity} @ ${unit_cost}/unit
      </h2>
      <p className="text-sm text-gray-500">{location}</p>
      <p className="text-xs text-gray-400">
        <span className="text-sm text-gray-800">
          <button>{requestor}</button>
        </span>
        , {new Date(requested_at).toLocaleString()}
      </p>
    </div>
  );
}
