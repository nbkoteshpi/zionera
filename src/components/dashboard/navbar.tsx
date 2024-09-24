import React from "react";

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
            <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
              <li className="nav-item">
                <a className="nav-link text-body" href="javascript:void(0)">
                  Aboutus
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="javascript:void(0)">
                  Branches
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="javascript:void(0)">
                  Songs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-body" href="javascript:void(0)">
                  Resources
                </a>
              </li>
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
