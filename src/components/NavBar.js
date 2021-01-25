import React from "react";
import { changeSideView, changeMapView, openForm } from "../actions/";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    changeSideView: () => dispatch(changeSideView()),
    changeMapView: () => dispatch(changeMapView()),
    openForm: (uiState) => dispatch(openForm(uiState)),
  };
};

function ConnectedNavBar({ changeMapView, changeSideView, openForm }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-light mb-2">
      <h2 className="navbar-header">Dispatcher</h2>
      <div className="navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item p-1">
            <button
              className="btn btn-primary"
              onClick={changeSideView}
            >
              Toggle List View
            </button>
          </li>
          <li className="nav-item p-1">
            <button className="btn btn-primary" onClick={changeMapView}>
              Toggle Map View
            </button>
          </li>
          <li className="nav-item p-1">
            <button className="btn btn-success" onClick={openForm}>
              Add New Movement
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
const NavBar = connect(null, mapDispatchToProps)(ConnectedNavBar);

export default NavBar;
