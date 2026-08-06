import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
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
   <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl shadow-sm p-8">

    <h2 className="text-3xl font-semibold text-slate-800 mb-2">
      Create Account
    </h2>

    <p className="text-slate-500 mb-6">
      Register to get started
    </p>

    <form onSubmit={handleSubmit} className="space-y-4">

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
          className="w-full border border-slate-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
          className="w-full border border-slate-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
          className="w-full border border-slate-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-slate-800 text-white py-3 rounded-md hover:bg-slate-700 transition"
      >
        Register
      </button>

      <p className="text-center text-slate-500">
        Already have an account?{" "}
        <Link
            to="/"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Login
        </Link>
      </p>

    </form>

  </div>
</div>
  )
}

export default Register
