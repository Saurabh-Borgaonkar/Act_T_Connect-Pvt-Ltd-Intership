
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import AdminDashboard from "./pages/admin/AdminDashboard";
import User from "./pages/admin/User";
import Products from "./pages/admin/Products";
import Profile from "./pages/admin/Profile";
import Upload from "./pages/admin/Upload";

import StudentDashboard from "./pages/student/StudentDashboard";

import ProtectedRoutes from "./components/ProtectedRoutes";
import AdminLayout from "./layouts/AdminLayout";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  
  return (
   <>
   <BrowserRouter>
  <Routes>

    {/* Public Routes */}
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Student */}
    <Route
      path="/student/dashboard"
      element={
        <ProtectedRoutes role="student">
          <StudentDashboard />
        </ProtectedRoutes>
      }
    />

    {/* Admin */}
    <Route
      path="/admin"
      element={
        <ProtectedRoutes role="admin">
          <AdminLayout />
        </ProtectedRoutes>
      }
    >
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="user" element={<User />} />
      <Route path="products" element={<Products />} />
      <Route path="profile" element={<Profile />} />
      <Route path="upload" element={<Upload />} />
    </Route>

  </Routes>
</BrowserRouter>
   </>
  )
}

export default App
