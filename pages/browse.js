import fetch from "node-fetch";
import EnhancedTable from "components/table";

export default function Browse({ requests }) {
  console.log(requests);
  return (
    <div className="container p-2 mt-0 mx-auto">
      <h1 className="title">Browse</h1>
      <EnhancedTable data={requests} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/requests");
  const requests = await res.json();

  return {
    props: {
      requests,
    },
  };
}
