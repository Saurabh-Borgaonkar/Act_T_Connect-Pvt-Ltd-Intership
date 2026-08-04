
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
    const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., send a request to the server
   try{
    const response = await  axios.post("http://localhost:3000/auth/login",{email,password})
    localStorage.setItem("token",response.data.token);
    console.log(response.data);
    if(response.data.isuserExist.role==="admin"){
      navigate("/admin/dashboard");
    }else if(response.data.isuserExist.role==="student"){
      navigate("/student/dashboard");
    }
  }catch(error)
{
      setError(error.response?.data?.msg);
  }
  }
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
    <div>
      <label>Email : </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
    </div>
    <div>
      <label>Password : </label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
    </div>
    <button type="submit">Login</button>
    {error && <p>{error}</p>}
    <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;

