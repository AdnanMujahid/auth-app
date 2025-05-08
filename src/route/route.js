// route/route.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dashboard from '../components/Dashboard';

const AppRoutes = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
