import { useEffect, useState } from 'react';
import axios from 'axios';
const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");
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
        fetchUsers();
    }, []);

  return (
    <div>
        <h2>Admin Dashboard</h2>
        <p>Welcome to your dashboard!</p>
        <button>Get Users</button>
        <button>Delete User</button>
        <button>Edit User</button>
        <h3>Users List:</h3>
        <ul>
            {users.map((user) => (  
                <li key={user._id}>
                    <strong>{user.name}</strong> - {user.email} - {user.role}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default AdminDashboard
