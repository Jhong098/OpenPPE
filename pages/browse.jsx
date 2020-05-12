import { useEffect, useState, useCallback } from "react";
import Grid from "components/browseGrid";
import Filters from "components/filters";
import { useRequests } from "contexts/requests";
import firebase from "firebase/app";
import "firebase/firestore";
import initFirebase from "utils/auth/initFirebase";

const ITEMS_PER_PAGE = 10;
initFirebase();

export default function Browse() {
  const [state, dispatch] = useRequests();
  const [currentPage, setCurrentPage] = useState(1);
  const startAt = currentPage * ITEMS_PER_PAGE - ITEMS_PER_PAGE;

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  const fetchData = useCallback(async () => {
    const db = firebase.firestore();
    const query = db
      .collection("requests")
      .orderBy("_id")
      .startAt(startAt)
      .limit(ITEMS_PER_PAGE);

    try {
      const snapshot = await query.get();
      const requests = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      await dispatch({
        type: "FETCH_REQUESTS",
        payload: requests,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        payload: error,
      });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (currentPage > 1) {
      fetchData();
    }
  }, [currentPage]);

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
    <div className="container p-2 mt-0 mx-auto flex flex-col">
      <h1 className="title">Browse</h1>
      <Filters />
      {message && <p>{message}</p>}
      {requests && requests.length ? (
        <Grid data={filterRequests()} />
      ) : (
        <div>loading...</div>
      )}
      <button className="mt-4" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
}
