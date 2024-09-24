import React from "react";
import NavItem from "./navbarItem.tsx";

const Navabar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-light sticky-top rounded">
        <div className="container-fluid">
          <a className="navbar-brand text-body" href="javascript:void(0)">
            ZionEra
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav mr-2" style={{ marginLeft: "auto" }}>
              <NavItem navItemText="About Us" />
              <NavItem navItemText="Branches" />
              <NavItem navItemText="Songs" />
              <NavItem navItemText="Resources" />
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-primary" type="button">
                Login/SignUp
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navabar;
