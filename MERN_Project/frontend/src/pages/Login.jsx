
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault();
         ShowEmailandPassword();
    // Handle login logic here
  }
  const ShowEmailandPassword = () => {
    console.log("Email:", email);
    console.log("Password:", password);

  }
  return (
    <div>
      <h2>Login</h2>

      <form action="handleLogin" method="POST" onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

