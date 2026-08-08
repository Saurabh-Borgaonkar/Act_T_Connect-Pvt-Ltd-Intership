import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/Authcontext";

const User = () => {
  const { token } = useContext(AuthContext);

  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] = useState({
    name: "",
    email: "",
    role: "",
  });

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/auth/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/auth/delete-user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.put(
        `http://localhost:3000/auth/update-user/${selectedUser._id}`,
        selectedUser,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Users
          </h1>

          <p className="text-slate-500">
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

      <div className="bg-white border border-slate-200 rounded-xl overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-50 border-b border-slate-200">

            <tr>

              <th className="text-left px-6 py-4">
                Name
              </th>

              <th className="text-left px-6 py-4">
                Email
              </th>

              <th className="text-left px-6 py-4">
                Role
              </th>

              <th className="text-center px-6 py-4">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user._id}
                className="border-b hover:bg-slate-50"
              >

                <td className="px-6 py-4">
                  {user.name}
                </td>

                <td className="px-6 py-4">
                  {user.email}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.role === "admin"
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {user.role}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-4">

                    <button
                      onClick={() => setSelectedUser(user)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteUser(user._id)}
                      className="text-red-600 hover:text-red-800"
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

      {/* Edit User */}

      <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-5">
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
            className="border border-slate-300 rounded-md px-4 py-2"
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
            className="border border-slate-300 rounded-md px-4 py-2"
          />

          <select
            value={selectedUser.role}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                role: e.target.value,
              })
            }
            className="border border-slate-300 rounded-md px-4 py-2"
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>

          <button
            onClick={updateUser}
            className="bg-slate-800 text-white py-2 rounded-md hover:bg-slate-700"
          >
            Update User
          </button>

        </div>

      </div>

    </main>
  );
};

export default User;