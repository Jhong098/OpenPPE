import fetch from "node-fetch";
import EnhancedTable from "components/table";
import LeftSidebar from "components/leftSidebar";

export default function Orders({ }) {

  return (
    <div className="relative container p-2 mt-0 mx-auto">
        <LeftSidebar/>
        <div className="container p-2 mt-0 mx-auto">
        <h1 className="title">Orders</h1>

        </div>
    </div>
  );
}