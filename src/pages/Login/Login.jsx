import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (err) {
      setError(err);
      console.log(err)
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          onChange={e=>setUsername(e.target.value)}
          placeholder="johndoe"
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && error}
      </form>
      <hr />
      <span>Dont have an account? <Link className="register" to="/register">Register</Link></span>
    </div>
  );
}

export default Login;
