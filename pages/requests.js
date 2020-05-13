import fetch from "node-fetch";
import EnhancedTable from "components/table";
import LeftSidebar from "components/leftSidebar";
import Nav from "components/nav";
import Button from "components/button";
import { useSidebar } from "contexts/sidebar";

export default function Requests() {
  const [state, dispatch] = useSidebar();
  
  const toggleEdit = () =>{
    dispatch({
      type: "OPEN",
      payload: "editRequest",
    });
  }
  
  return (
    <>
      <Nav/>
      <LeftSidebar/>
      <div className="boundedContainer">
        <h1 className="title">Requests</h1>
        <Button onClick={()=>toggleEdit()}>Edit Request</Button>
      </div>
    </>
  );
}