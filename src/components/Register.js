import React from "react";
import { register } from "../services/ApiService";

export default function Register(props) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // register page with username, email and password input
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">Register</h3>
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {/* password input */}
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* register button */}
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <button
            className="btn btn-primary btn-block"
            type="button"
            onClick={() =>
              register({ username, email, password, role: ["ROLE_USER"] }).then(
                (response) => {
                  console.log(response);
                  window.location.href = "/login";
                }
              )
            }
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
