//login page with username and password
import React from "react";
import { login } from "../services/ApiService";

export default function Login(props) {
  const [username, setUsername] = React.useState("testuser");
  const [password, setPassword] = React.useState("123456");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">Login</h3>
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
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary btn-block"
                  type="button"
                  onClick={() => login(username, password)}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
