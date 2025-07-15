import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../screens/login.jsx';
import Register from '../screens/Register.jsx';
import Home from '../screens/Home.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<div className="bg-purple-500 text-white p-4 text-xl">Profile Page</div>} />
    </Routes>
  );
};

export default AppRoutes;
