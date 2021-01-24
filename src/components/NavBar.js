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
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      <h1>Dispatcher Router</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item p-1">
            <button
              className="btn btn-outline-primary"
              onClick={changeSideView}
            >
              Toggle List View
            </button>
          </li>
          <li className="nav-item p-1">
            <button className="btn btn-outline-primary" onClick={changeMapView}>
              Toggle Map View
            </button>
          </li>
          <li className="nav-item p-1">
            <button className="btn btn-outline-success" onClick={openForm}>
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
