import { useState } from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearError, registerUser } from "../redux/userSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cardFlipped, setCardFlipped] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      dispatch(registerUser({ name, email, password }));
      setRegistrationSuccess(true);
      setCardFlipped(true);
      setLoading(true);
      navigator.vibrate(500);
    } catch (error) {
      setLoading(false);
      dispatch(clearError());
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register flex items-center justify-center h[100vh]">
      <div
        className={`main ${
          cardFlipped ? "flipped" : ""
        } flex items-center flex-col justify-center bg-gray-100 p-8 rounded-md shadow-md md:w-96 lg:w-1/2 xl:w-1/3`}
      >
        {registrationSuccess ? (
          <div className="flipped">
            <h1 className={`text-2xl font-semibold mb-4 `}>
              Registration Successful! 🎉
            </h1>
            <Link to={"/"} className="text-gray-700 underline">
              Go to Home Page ---{">"}
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-semibold mb-4">Welcome, Register</h1>
            <form className="flex flex-col w-full" onSubmit={handleRegister}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="username"
                  required
                  className="mt-1 p-2 border-2 outline-none rounded-md w-full"
                />
              </div>
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
                {loading ? "Registering...." : "Register"}
              </button>
            </form>
            <p className="mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
