import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid text-white">
        <Link className="nav-link text-white" to="/">
          AgriTech
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/profile">
                Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to={"/order"}>
                Orders
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white">Admin</Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white">SignUp</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
