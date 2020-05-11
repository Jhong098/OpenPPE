import EnhancedTable from "components/table";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Browse() {
  const { data, error } = useSWR("/api/requests", fetcher);
  if (error) return <div>failed to load</div>;

  return (
    <div className="container p-2 mt-0 mx-auto">
      <h1 className="title">Browse</h1>
      {data && data.length ? (
        <EnhancedTable data={data} />
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
