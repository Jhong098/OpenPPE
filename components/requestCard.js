import { Trash } from "react-feather";
import RequestForm from "./RequestForm";

const STATUS_BG_TO_COLOR = {
  canceled: "bg-red-300",
  open: "bg-green-300",
  claimed: "bg-blue-300",
};

const STATUS_DOT_TO_COLOR = {
  canceled: "bg-red-500",
  open: "bg-green-500",
  claimed: "bg-blue-500",
};

const StatusBadge = ({ status }) => {
  return (
    <p className={`badge ${STATUS_BG_TO_COLOR[status]}`}>
      <span
        className={`w-3 h-3 mr-1 rounded-lg ${STATUS_DOT_TO_COLOR[status]}`}
      ></span>
      <span className="text-xs font-semibold">{status}</span>
    </p>
  );
};

export default function RequestCard({
  data,
  isExpanded = false,
  canEdit = false,
  handleDelete = () => {},
}) {
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
    id,
  } = data;
  return (
    <div className={`${isExpanded ? "expanded-card" : "card"} relative`}>
      {isExpanded ? (
        <RequestForm formTitle="Edit Request" requestData={data} isEdit />
      ) : (
        <>
          <div className="flex w-full items-center justify-between">
            <StatusBadge status={status} />
            <button className="hover:opacity-75 hover:underline">
              #{category}
            </button>
            {canEdit && (
              <button onClick={() => handleDelete(id)}>
                <Trash />
              </button>
            )}
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
        </>
      )}
    </div>
  );
}
