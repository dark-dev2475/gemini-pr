import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Login successful!");
        // Save token, redirect, etc.
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("/users/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await res.json();
      setMessage(data.message || "If your email exists, you will receive instructions.");
    } catch (err) {
      setMessage("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Sign in to your account</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <button
            className="text-sm text-blue-400 hover:underline"
            onClick={() => setShowForgot(!showForgot)}
            type="button"
          >
            Forgot password?
          </button>
          <span className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-400 hover:underline">
              Create one
            </Link>
          </span>
        </div>
        {showForgot && (
          <form onSubmit={handleForgot} className="mt-6 space-y-3">
            <label className="block text-gray-300 mb-1" htmlFor="forgotEmail">
              Enter your email to reset password
            </label>
            <input
              className="w-full px-4 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="forgotEmail"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
            >
              Send Reset Link
            </button>
          </form>
        )}
        {message && (
          <div className="mt-6 text-center text-sm text-red-400">{message}</div>
        )}
      </div>
    </div>
  );
};

export default Login;