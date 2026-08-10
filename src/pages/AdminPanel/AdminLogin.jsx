import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Login Function
  const fetchAdmin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        formData
      );

      console.log(res.data);
      alert(res.data.message);
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
            A
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Welcome back! Please sign in.
        </p>

        <form onSubmit={fetchAdmin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>

            <div className="mt-2 flex items-center border rounded-lg px-3">
              <Mail size={18} className="text-gray-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="admin@example.com"
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="mt-2 flex items-center border rounded-lg px-3">
              <Lock size={18} className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full p-3 outline-none"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} className="text-gray-500" />
                ) : (
                  <Eye size={20} className="text-gray-500" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" className="text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default AdminLogin;