import React from "react";
import "./Navbar.css";
import logo from "../../../../images/logos/logo.png";
const Navbar = () => {
  return (
    <section className="container ">
      <nav class="navbar navbar-expand-lg navbar-light ">
        <img style={{ width:'150px', height:'47px'}}src={logo} alt=""/>
        <div class="collapse navbar-collapse pt-5" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/home">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="/portfolio">
                Our Portfolio
              </a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="/team">
                Our Team
              </a>
            </li>
            <li class="nav-item mr-3">
              <a class="nav-link" href="/contract">
                Contact 
              </a>
            </li>
            <a className="btn navbar-login mr-3" href='/login'>Login</a>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
