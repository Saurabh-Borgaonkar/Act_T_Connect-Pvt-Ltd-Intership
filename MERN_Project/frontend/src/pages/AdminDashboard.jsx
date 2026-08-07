import {  useState } from 'react';
import axios from 'axios';
import {useContext} from "react";
import { AuthContext } from '../context/Authcontext';
const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
//const [updatedUser, setUpdatedUser] = useState({ name: '',email: '',role: ''});
    const [selectedUser, setSelectedUser] = useState({ name: '',email: '',role: ''});
    const {token}=useContext(AuthContext);
        const fetchUsers = async () => {
            try {
                // const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:3000/auth/users", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.data;
                setUsers(data.users);
            } catch (error) {
                console.error("Error fetching users:", error);
            }   
        };
        const deleteUser = async (Id) => {
            try{
                // const token=localStorage.getItem("token");
                await axios.delete(`http://localhost:3000/auth/delete-user/${Id}`,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });
                localStorage.removeItem("token");
                fetchUsers(); // Refresh the users list
            }catch(error){
                console.error("Error deleting user:",error);
            }
        };
        
        const updateUser= async()=>{
            try{
                await axios.put(`http://localhost:3000/auth/update-user/${selectedUser._id}`,selectedUser,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });
                fetchUsers(); // Refresh the users list
            }catch(error){
                console.error("Error updating user:",error);
            }
        }
        return (
         <div className="min-h-screen bg-slate-50">
  <div className="max-w-7xl mx-auto px-8 py-8">

    {/* Header */}
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-semibold text-slate-800">
          Admin Dashboard
        </h1>
        <p className="text-slate-500 mt-1">
          Manage users and roles
        </p>
      </div>

      <button
        onClick={fetchUsers}
        className="bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition"
      >
        Refresh Users
      </button>
    </div>

    {/* Users Table */}
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
              Name
            </th>
            <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
              Email
            </th>
            <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
              Role
            </th>
            <th className="text-center px-6 py-4 text-sm font-semibold text-slate-700">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user._id}
              className="border-b border-slate-100 hover:bg-slate-50"
            >
              <td className="px-6 py-4 text-slate-800">
                {user.name}
              </td>

              <td className="px-6 py-4 text-slate-600">
                {user.email}
              </td>

              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    user.role === "admin"
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {user.role}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteUser(user._id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Edit Form */}
    <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold text-slate-800 mb-5">
        Edit User
      </h2>

      <div className="grid gap-4">
        <input
          type="text"
          value={selectedUser.name}
          onChange={(e) =>
            setSelectedUser({
              ...selectedUser,
              name: e.target.value,
            })
          }
          placeholder="Name"
          className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />

        <input
          type="email"
          value={selectedUser.email}
          onChange={(e) =>
            setSelectedUser({
              ...selectedUser,
              email: e.target.value,
            })
          }
          placeholder="Email"
          className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />

        <select
          value={selectedUser.role}
          onChange={(e) =>
            setSelectedUser({
              ...selectedUser,
              role: e.target.value,
            })
          }
          className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <button
          onClick={updateUser}
          className="bg-slate-800 text-white py-2 rounded-md hover:bg-slate-700 transition"
        >
          Update User
        </button>
      </div>
    </div>
  </div>
</div>
  
  )
}

export default AdminDashboard
