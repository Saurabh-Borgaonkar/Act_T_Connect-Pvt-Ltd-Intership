import {
  LayoutDashboard,
  Users,
  Package,
  User,
  Image,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";
const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`
        fixed md:static top-0 left-0 z-50
        w-64 min-h-screen
        bg-white border-r border-gray-200
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">
          Admin<span className="text-slate-500">Panel</span>
        </h1>
      </div>

     {/* Menu */}
<nav className="mt-6 px-3">

  <NavLink
    to="/admin/dashboard"
    className={({ isActive }) =>
      `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
        isActive
          ? "bg-gray-100 border-l-4 border-slate-800 text-slate-800 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`
    }
  >
    <LayoutDashboard size={20} />
    Dashboard
  </NavLink>

  <NavLink
    to="/admin/user"
    className={({ isActive }) =>
      `w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-lg transition ${
        isActive
          ? "bg-gray-100 border-l-4 border-slate-800 text-slate-800 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`
    }
  >
    <Users size={20} />
    Users
  </NavLink>

  <NavLink
    to="/admin/products"
    className={({ isActive }) =>
      `w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-lg transition ${
        isActive
          ? "bg-gray-100 border-l-4 border-slate-800 text-slate-800 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`
    }
  >
    <Package size={20} />
    Products
  </NavLink>

  <NavLink
    to="/admin/profile"
    className={({ isActive }) =>
      `w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-lg transition ${
        isActive
          ? "bg-gray-100 border-l-4 border-slate-800 text-slate-800 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`
    }
  >
    <User size={20} />
    Profile
  </NavLink>

  <NavLink
    to="/admin/upload"
    className={({ isActive }) =>
      `w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-lg transition ${
        isActive
          ? "bg-gray-100 border-l-4 border-slate-800 text-slate-800 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`
    }
  >
    <Image size={20} />
    Upload
  </NavLink>

</nav>

      {/* Logout */}
      <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">

        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </aside>
  );
};

export default Sidebar;