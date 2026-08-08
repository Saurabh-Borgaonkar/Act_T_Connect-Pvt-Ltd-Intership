import { useState, useEffect, useContext } from "react";
import axios from "axios";
import DashboardCard from "../../components/DashboardCard";
import { AuthContext } from "../../context/Authcontext";

const AdminDashboard = () => {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

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
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="p-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <DashboardCard
          title="Total Users"
          value={users.length}
        />

        <DashboardCard
          title="Admins"
          value={users.filter((u) => u.role === "admin").length}
        />

        <DashboardCard
          title="Students"
          value={users.filter((u) => u.role === "student").length}
        />

        <DashboardCard
          title="Total Records"
          value={users.length}
        />

      </div>

    </main>
  );
};

export default AdminDashboard;