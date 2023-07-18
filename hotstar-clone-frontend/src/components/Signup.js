import React, { useState } from "react";
import { Link } from "react-router-dom";


function Signup() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (data.success === true) {
      
      window.location.replace("/login");
    }
    setMessage(data.message);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container" style={{ marginTop: "14%" }}>
      <form onSubmit={handleSubmit} style={{ margin: "55px 0px 0px" }}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary ">
          Signup
        </button>
        {message && <div>{message}</div>}
        <p>If you have an Account </p>
        <Link to="/login">
          <p>Click here for login</p>
        </Link>
      </form>
    </div>
  );
}

export default Signup;
