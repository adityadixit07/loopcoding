import React from "react";

const AuthForm = ({ isRegisterMode, onSubmit }) => {
  return (
    <div>
      <h1>{isRegisterMode === "Register" ? "Register" : "Login"}</h1>
      <form onSubmit={onSubmit}>
        {isRegisterMode === "Register" && (
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" required />
          </div>
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <button type="submit">
          {isRegisterMode === "Register" ? "Register" : "Login"}
        </button>
      </form>
      {isRegisterMode === "Login" ? (
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      ) : (
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      )}
    </div>
  );
};

export default AuthForm;
