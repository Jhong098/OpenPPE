import EditRequest from "components/toolbar_editRequest";
import EditProfile from "components/toolbar_editProfile";
import React, { useState } from "react";

export const toolbarConstants = {
  EDIT_REQUEST: "editRequest",
  EDIT_PROFILE: "editProfile",
};

export default function RightSideBar({ toolbarOptions }) {
  const { handleToolbarClose, renderedComponent, isOpen } = toolbarOptions;
  const whiteList = {
    [toolbarConstants.EDIT_REQUEST]: EditRequest,
    [toolbarConstants.EDIT_PROFILE]: EditProfile,
  };

  return isOpen && renderedComponent in whiteList ? (
    <div className="relative">
      <button
        onClick={handleToolbarClose}
        className="fixed z-10 inset-0 h-full w-full bg-black opacity-25 cursor-default"
      ></button>
      <div className="fixed z-20 bg-light_primary mt-navHeight p-6 w-64 top-0 right-0 bottom-0">
        {React.createElement(whiteList[renderedComponent])}
      </div>
    </div>
  ) : (
    <></>
  );
}

export function useToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [renderedComponent, setRenderedComponent] = useState(null);

  const handleToolbarClose = () => {
    setIsOpen(false);
    setRenderedComponent(null);
  };
  const handleToolbarOpen = (componentName) => {
    setIsOpen(true);
    setRenderedComponent(componentName);
  };
  const handleToolbarToggle = (componentName) => {
    if (renderedComponent !== componentName) {
      //not open or other component is open
      handleToolbarOpen(componentName);
    } else if (isOpen) {
      //component is already on
      handleToolbarClose(componentName);
    }
  };

  return {
    isOpen,
    renderedComponent,
    handleToolbarClose,
    handleToolbarOpen,
    handleToolbarToggle,
  };
}
