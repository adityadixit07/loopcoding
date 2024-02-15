import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${server}/user/login`, {
        email,
        password,
      });
      const { data } = response;
      if (data?.success) {
        toast.success(data?.message);
        navigate("/courses");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
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
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Login
          </button>
        </form>
        <p className="mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
