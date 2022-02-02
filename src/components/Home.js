//login page with username and password
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/ApiService";

export default function Home(props) {
  const [isLogged, setIsLogged] = React.useState(false);

  useState(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      setIsLogged(true);
    }
  }, []);

  return (
    <div>
      <h1 className="text-center">Home Page</h1>
      {isLogged ? <p>"User Logged"</p> : <p>"User Not Logged"</p>}
      {isLogged && (
        <div className="row">
          <div>
            <button
              onClick={() =>
                logout().then(() => {
                  setIsLogged(false);
                })
              }
            >
              Logout
            </button>
          </div>
        </div>
      )}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {isLogged ? (
            <Link to="/notes">Notes</Link>
          ) : (
            // div row

            <div className="row">
              <Link to="/login">Login</Link> {"   or   "}
              <Link to="/register">Register</Link>
            </div>
          )}
        </li>
      </ul>

      <hr />
    </div>
  );
}
