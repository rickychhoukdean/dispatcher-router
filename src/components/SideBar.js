import React from "react";
import MovementForm from "./MovementForm";
import MovementList from "./MovementList";

function SideBar() {
  return (
    <div className="sidebar">
      <MovementForm />
      <MovementList />
    </div>
  );
}

export default SideBar;
