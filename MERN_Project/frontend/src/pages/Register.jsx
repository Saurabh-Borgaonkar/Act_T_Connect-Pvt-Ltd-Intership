import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/register", { name, email, password });
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error.response?.data);
    }
  }
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div> 
          <label>Name :  </label>
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter name" required />
        </div>
        <div>
          <label>Email : </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required />
        </div>
        <div>
          <label>Password : </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
