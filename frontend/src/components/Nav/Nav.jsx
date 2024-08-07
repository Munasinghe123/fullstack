import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <ul className="home-u1">
        <li className="home-11">
          <Link to="/mainhome" className="active-home">
            <h1>Home</h1>
          </Link>
        </li>

        <li className="home-11">
          <Link to="/addUser" className="active-home">
            <h1>Add user</h1>
          </Link>
        </li>

        <li className="home-11">
          <Link to="/userDetails" className="active-home">
            <h1>User details</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
