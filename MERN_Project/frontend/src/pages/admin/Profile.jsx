import { useState } from "react";
import { useContext, useEffect} from "react";
import { AuthContext } from "../../context/Authcontext";
const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    role: "Admin",
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
const{ user }=useContext(AuthContext);
  useEffect(() => {
    if (user) {
        setProfile({ name: user.name,email: user.email,role: user.role});
    }
}, [user]);

  return (
    <div className="p-6">

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          My Profile
        </h1>
        <p className="text-slate-500 mt-1">
          Manage your account information
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* ================= Profile Information ================= */}
        <div className="bg-white rounded-xl shadow border border-slate-200 p-6">

          <h2 className="text-xl font-semibold mb-6">
            Personal Information
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-600">
                Name
              </label>

              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    name: e.target.value,
                  })
                }
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-600">
                Email
              </label>

              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({
                    ...profile,
                    email: e.target.value,
                  })
                }
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-600">
                Role
              </label>

              <input
                type="text"
                value={profile.role}
                disabled
                className="w-full bg-slate-100 border border-slate-300 rounded-lg px-4 py-3 cursor-not-allowed"
              />
            </div>

            <button
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg transition"
            >
              Update Profile
            </button>

          </div>

        </div>

        {/* ================= Change Password ================= */}
        <div className="bg-white rounded-xl shadow border border-slate-200 p-6">

          <h2 className="text-xl font-semibold mb-6">
            Change Password
          </h2>

          <div className="space-y-5">

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-600">
                Current Password
              </label>

              <input
                type="password"
                value={password.currentPassword}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    currentPassword: e.target.value,
                  })
                }
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-600">
                New Password
              </label>

              <input
                type="password"
                value={password.newPassword}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    newPassword: e.target.value,
                  })
                }
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-600">
                Confirm Password
              </label>

              <input
                type="password"
                value={password.confirmPassword}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    confirmPassword: e.target.value,
                  })
                }
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
            >
              Change Password
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;