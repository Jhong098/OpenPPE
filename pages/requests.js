import Nav from "components/nav";
import Button from "components/button";
import RightSidebar, {useToolbar, toolbarConstants} from "components/rightSidebar";

export default function Requests() {
  const toolbarOptions = useToolbar();
  
  return (
    <>
      <Nav toolbarOptions={toolbarOptions}/>
      <RightSidebar toolbarOptions={toolbarOptions}/>
      <div>
        <h1 className="title">Requests</h1>
        <Button onClick={()=>toolbarOptions.handleToolbarToggle(toolbarConstants.EDIT_REQUEST)}>Edit Request</Button>
      </div>
    </>
  );
}