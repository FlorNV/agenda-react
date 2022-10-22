import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            ContactsBook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/contacto/nuevo">
                  Nuevo contacto
                </Link>
              </li>
            </ul>
            {/* <span className="nav-link ms-auto me-2">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </span> */}
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
