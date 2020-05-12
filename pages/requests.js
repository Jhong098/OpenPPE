import fetch from "node-fetch";
import EnhancedTable from "components/table";
import LeftSidebar from "components/leftSidebar";
import Nav from "components/nav";

export default function Requests({  }) {

  return (
    <>
        <Nav/>
        <LeftSidebar/>
        <div className="container p-2 mt-0 mx-auto">
            <h1 className="title">Requests</h1>
        </div>
    </>
  );
}