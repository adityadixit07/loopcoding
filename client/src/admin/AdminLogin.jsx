import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, clearError } from "../redux/adminSlice";
import { logOut } from "../redux/userSlice";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const action = dispatch(adminLogin({ email, password }));
      await action.unwrap();
      navigate("/admin/dashboard");
      navigator.vibrate(500);
    } catch (error) {
      dispatch(clearError());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login flex items-center justify-center">
      <div className="main flex items-center flex-col justify-center bg-gray-100 p-8 rounded-md shadow-md sm:w-full md:w-96 lg:w-1/2 xl:w-1/3">
        <h1 className="text-2xl font-semibold mb-4">Welcome, Login</h1>
        <form className="flex flex-col w-full" onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              required
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              required
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className={`bg-blue-500 text-white p-2 rounded-md relative ${
              loading && "bg-green-600"
            }`}
            disabled={loading}
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center w-full">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            )}
            {loading ? "Logging in...." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
