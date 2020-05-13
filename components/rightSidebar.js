import Link from "next/link";
import EditRequest from "components/toolbar_editRequest";
import EditProfile from "components/toolbar_editProfile";
import { useSidebar } from "contexts/sidebar";
import React from "react";

export default function RightSideBar() {
  const [state, dispatch] = useSidebar();
  
  const toggleClose = () =>{
    dispatch({
      type: "CLOSE"
    });
  }
  const whiteList = {
    "editRequest": EditRequest,
    "editProfile": EditProfile
  }

  return state.isOpen && (state.renderedComponent in whiteList) ? (
    <div class="relative">
      <button onClick={toggleClose} className="fixed -z-10 inset-0 h-full w-full bg-black opacity-50 cursor-default"></button>
      <div class="fixed bg-light_primary mt-navHeight p-6 w-64 top-0 right-0 bottom-0">
        {React.createElement(whiteList[state.renderedComponent])}
      </div>
    </div>
  ) : (<></>);
}
