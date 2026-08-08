import { HiMenuAlt3 } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ setIsOpen, user }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">

      {/* Left Side */}
      <div className="flex items-center gap-4">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl text-gray-700"
        >
          <HiMenuAlt3 />
        </button>

        <h2 className="text-xl font-semibold text-slate-800">
          Dashboard
        </h2>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="relative text-2xl text-gray-600 hover:text-slate-900 transition">

          <IoNotificationsOutline />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 cursor-pointer">

          <FaUserCircle className="text-3xl text-gray-600" />

          <div className="hidden sm:block">

            <h4 className="text-sm font-semibold text-slate-800">
              {user?.name || "Admin"}
            </h4>

            <p className="text-xs text-gray-500">
              {user?.role || "Administrator"}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Navbar;