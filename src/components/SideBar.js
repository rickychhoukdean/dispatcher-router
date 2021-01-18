import React from "react";
import MovementList from "./MovementList";
import FormModal from "./FormModal";

function SideBar() {
  return (
    <div className="sidebar">
      <FormModal />
      <MovementList />
    </div>
  );
}

export default SideBar;
