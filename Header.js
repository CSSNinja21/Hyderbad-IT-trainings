import React from "react";
import logo from "./logo.jpg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} class="img-fluid rounded-top" alt=""/>
          </a>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse justify-content-end navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink class="nav-link active" to="/" aria-current="page">
                  Home <span class="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/about">
                  About
                </NavLink>
              </li>
               <li class="nav-item">
                <NavLink class="nav-link" to="/batches">
                  Batches
                </NavLink>
              </li> 
              <li class="nav-item">
                <NavLink class="nav-link" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
