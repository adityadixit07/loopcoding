import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";
import { useDispatch } from "react-redux";
import { clearError, loginUser } from "../redux/userSlice";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const action = dispatch(loginUser({ email, password }));
      await action.unwrap();
      navigate("/");
      navigator.vibrate(500);
      setLoading(true);
    } catch (error) {
      dispatch(clearError());
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ y: "-40vh" }}
      animate={{ y: 0 }}
      transition={{ type: "tween", stiffness: 120 }}
      className="login flex items-center justify-center "
    >
      <div className="main flex items-center flex-col justify-center shadow-xl bg-white p-8 rounded-md sm:w-full md:w-96 lg:w-1/2 xl:w-1/3">
        <h1 className="text-2xl font-semibold mb-4">Welcome 👋</h1>
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
              placeholder="abc@gmail.com"
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
              placeholder="*********"
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
        <p className="mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Login;
