import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/axios";
const Register = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
        const res = await axios.post("/users/register", form);
        setMessage("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
        setMessage(
            err.response?.data?.message || "Registration failed"
        );
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-800">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-yellow-500 rounded-full p-3 mb-3 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12A4 4 0 1 1 8 12a4 4 0 0 1 8 0ZM12 14v6m0 0H9m3 0h3" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Sign up</h2>
          <p className="text-gray-400">Create your account to get started.</p>
        </div>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-lg shadow-md transition"
          >
            Register
          </button>
        </form>
        <div className="flex justify-between items-center mt-6">
          <span className="text-gray-400 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-400 hover:underline font-medium">
              Login
            </Link>
          </span>
        </div>
        {message && (
          <div className="mt-6 text-center text-sm text-yellow-300">{message}</div>
        )}
      </div>
    </div>
  );
};

export default Register;