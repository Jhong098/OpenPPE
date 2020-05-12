import EnhancedTable from "components/table";
import { useEffect } from "react";
import Grid from "components/browseGrid";
import Filters from "components/filters";
import useSWR from "swr";
import { useRequests } from "contexts/requests";

const fetcher = (url) => fetch(url).then((res) => res.json());

const data = [
  {
    _id: "5eb8cbcdfcea1b19be50aec5",
    name: "Gown",
    requestor: "Test",
    location: "5141 Broadway New York NY 10034",
    category: "Surgical",
    size: "M",
    quantity: 30,
    unit_cost: 9.14,
    requested_at: "2020-05-11T03:49:59.406Z",
    status: "claimed",
  },
  {
    _id: "5eb8cbcdfcea1b19be50aec6",
    name: "Ventilator",
    requestor: "Test",
    location: "525 East 68th Street, 6th Floor New York NY 10065",
    category: "Ventilator",
    size: "L",
    quantity: 90,
    unit_cost: 4.83,
    requested_at: "2020-05-11T03:49:59.406Z",
    status: "open",
  },
  {
    _id: "5eb8cbcdfcea1b19be50aec7",
    name: "Face Shield",
    requestor: "Test",
    location: "622 West 168th Street New York NY 10032",
    category: "Mask",
    size: "S",
    quantity: 123,
    unit_cost: 6.35,
    requested_at: "2020-05-11T03:49:59.406Z",
    status: "open",
  },
  {
    _id: "5eb8cbcdfcea1b19be50aec8",
    name: "Gown",
    requestor: "Test",
    location: "5141 Broadway New York NY 10034",
    category: "Surgical",
    size: "S",
    quantity: 81,
    unit_cost: 3.09,
    requested_at: "2020-05-11T03:49:59.406Z",
    status: "claimed",
  },
  {
    _id: "5eb8cbcdfcea1b19be50aec9",
    name: "Ventilator",
    requestor: "Test",
    location: "525 East 68th Street, 6th Floor New York NY 10065",
    category: "Ventilator",
    size: "M",
    quantity: 72,
    unit_cost: 4.69,
    requested_at: "2020-05-11T03:49:59.406Z",
    status: "claimed",
  },
  {
    _id: "5eb8cbcdfcea1b19be50aeca",
    name: "Face Shield",
    requestor: "Test",
    location: "600 University Avenue, Toronto",
    category: "Mask",
    size: "M",
    quantity: 92,
    unit_cost: 6.74,
    requested_at: "2020-05-11T03:49:59.406Z",
    status: "canceled",
  },
  {
    _id: "5eb8cbcdfcea1b19be50aecb",
    name: "Ventilator",
    requestor: "Test",
    location: "622 West 168th Street New York NY 10032",
    category: "Ventilator",
    size: "S",
    quantity: 118,
    unit_cost: 3.03,
    requested_at: "2020-05-11T03:49:59.406Z",
    status: "claimed",
  },
  {
    _id: "5eb8cbcdfcea1b19be50aecc",
    name: "Ventilator",
    requestor: "Test",
    location: "600 University Avenue, Toronto",
    category: "Ventilator",
    size: "S",
    quantity: 60,
    unit_cost: 7.22,
    requested_at: "2020-05-11T03:49:59.406Z",
    status: "open",
  },
  {
    _id: "5eb8cc29fcea1b19be50aecd",
    name: "Gown",
    requestor: "Test",
    location: "600 University Avenue, Toronto",
    category: "Surgical",
    size: "S",
    quantity: 120,
    unit_cost: 6.11,
    requested_at: "2020-05-11T03:53:04.993Z",
    status: "claimed",
  },
  {
    _id: "5eb8cc29fcea1b19be50aece",
    name: "Ventilator",
    requestor: "Test",
    location: "5141 Broadway New York NY 10034",
    category: "Ventilator",
    size: "M",
    quantity: 37,
    unit_cost: 2.2,
    requested_at: "2020-05-11T03:53:04.993Z",
    status: "canceled",
  },
  {
    _id: "5eb8cc29fcea1b19be50aecf",
    name: "N95 Masks",
    requestor: "Test",
    location: "525 East 68th Street, 6th Floor New York NY 10065",
    category: "Mask",
    size: "L",
    quantity: 122,
    unit_cost: 3.63,
    requested_at: "2020-05-11T03:53:04.993Z",
    status: "claimed",
  },
  {
    _id: "5eb8cc29fcea1b19be50aed0",
    name: "Face Shield",
    requestor: "Test",
    location: "622 West 168th Street New York NY 10032",
    category: "Mask",
    size: "M",
    quantity: 97,
    unit_cost: 7.62,
    requested_at: "2020-05-11T03:53:04.993Z",
    status: "open",
  },
  {
    _id: "5eb8cc29fcea1b19be50aed1",
    name: "N95 Masks",
    requestor: "Test",
    location: "622 West 168th Street New York NY 10032",
    category: "Mask",
    size: "L",
    quantity: 55,
    unit_cost: 8.65,
    requested_at: "2020-05-11T03:53:04.993Z",
    status: "canceled",
  },
  {
    _id: "5eb8cc29fcea1b19be50aed2",
    name: "Gloves",
    requestor: "Test",
    location: "525 East 68th Street, 6th Floor New York NY 10065",
    category: "Surgical",
    size: "S",
    quantity: 111,
    unit_cost: 7.19,
    requested_at: "2020-05-11T03:53:04.993Z",
    status: "claimed",
  },
  {
    _id: "5eb8cc29fcea1b19be50aed3",
    name: "N95 Masks",
    requestor: "Test",
    location: "5141 Broadway New York NY 10034",
    category: "Mask",
    size: "L",
    quantity: 77,
    unit_cost: 6.76,
    requested_at: "2020-05-11T03:53:04.993Z",
    status: "claimed",
  },
  {
    _id: "5eb8cc29fcea1b19be50aed4",
    name: "N95 Masks",
    requestor: "Test",
    location: "5141 Broadway New York NY 10034",
    category: "Mask",
    size: "S",
    quantity: 26,
    unit_cost: 1.81,
    requested_at: "2020-05-11T03:53:04.993Z",
    status: "claimed",
  },
  {
    _id: "5eb8cc29fcea1b19be50aed5",
    name: "Gown",
    requestor: "Test",
    location: "525 East 68th Street, 6th Floor New York NY 10065",
    category: "Surgical",
    size: "S",
    quantity: 74,
    unit_cost: 5.52,
    requested_at: "2020-05-11T03:53:04.993Z",
    status: "canceled",
  },
  {
    _id: "5eb8cc29fcea1b19be50aed6",
    name: "Face Shield",
    requestor: "Test",
    location: "600 University Avenue, Toronto",
    category: "Mask",
    size: "S",
    quantity: 46,
    unit_cost: 7.44,
    requested_at: "2020-05-11T03:53:04.993Z",
    status: "open",
  },
  {
    _id: "5eb8cbcdfcea1b19be50aec4",
    name: "Modified Again",
    requestor: "Test",
    location: "5141 Broadway New York NY 10034",
    category: "Surgical",
    size: "L",
    quantity: 91,
    unit_cost: 3.87,
    requested_at: "2020-05-11T03:49:59.406Z",
    status: "open",
  },
];

export default function Browse() {
  // const { data, error } = useSWR("/api/requests", fetcher);
  const [state, dispatch] = useRequests();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch("/api/requests");
        // const json = await res.json();
        await dispatch({
          type: "FETCH_REQUESTS",
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: "FETCH_ERROR",
          payload: error,
        });
      }
    };
    fetchData();
  }, [dispatch]);

  // if (error) return <div>failed to load</div>;

  const { filters, requests, message, maxPriceFilter } = state;

  const filterRequests = () => {
    return requests.filter(
      ({ category, size, status, unit_cost }) =>
        (maxPriceFilter === "" ||
          parseFloat(unit_cost) < parseFloat(maxPriceFilter)) &&
        (filters.categories.length === 0 ||
          filters.categories.map((f) => f.value).includes(category)) &&
        (filters.sizes.length === 0 ||
          filters.sizes.map((f) => f.value).includes(size)) &&
        (filters.statuses.length === 0 ||
          filters.statuses.map((f) => f.value).includes(status))
    );
  };

  return (
    <div className="container p-2 mt-0 mx-auto">
      <h1 className="title">Browse</h1>
      <Filters />
      {message && <p>{message}</p>}
      {requests && requests.length ? (
        <Grid data={filterRequests()} />
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
