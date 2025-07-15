import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../screens/login.jsx';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<div className="bg-red-500 text-white p-4">Hello World!</div>}  />        <Route path='/home' element={<div>Home</div>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<div>Register</div>} />
        <Route path='/dashboard' element={<div>Dashboard</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
