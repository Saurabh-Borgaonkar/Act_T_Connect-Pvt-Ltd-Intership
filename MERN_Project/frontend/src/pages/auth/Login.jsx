
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {login} = useContext(AuthContext);

    const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., send a request to the server
   try{
    const response = await  axios.post("http://localhost:3000/auth/login",{email,password})
    // localStorage.setItem("token",response.data.token);
    login(response.data.token,response.data.isuserExist); //basically i have used context api to store the token in the local storage and also in the context api so that we can use it in other components
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
  <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl shadow-sm p-8">

    <h2 className="text-3xl font-semibold text-slate-800 mb-2">
      Welcome Back
    </h2>

    <p className="text-slate-500 mb-6">
      Login to your account
    </p>

    <form onSubmit={handleSubmit} className="space-y-4">

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

      {error && (
        <p className="text-red-600 text-sm">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-slate-800 text-white py-3 rounded-md hover:bg-slate-700 transition"
      >
        Login
      </button>

      <p className="text-center text-slate-500">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Register
        </Link>
      </p>

    </form>
  </div>
</div>
  );
};

export default Login;

