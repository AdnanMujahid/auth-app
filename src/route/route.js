import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dashboard from '../components/Dashboard';
import ContainerBlogs from '../components/ContainerBlogs'; // Docker/Container blog
import DevOpsBlog from '../components/DevOpsBlog';
import AuthorBlogs from '../components/AuthorBlogs'; // NEW: Author info
import DockerBlog from '../components/DockerBlog';

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
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/docker"
        element={isAuthenticated ? <DockerBlog /> : <Navigate to="/login" />}
      />
      <Route
        path="/devops"
        element={isAuthenticated ? <DevOpsBlog /> : <Navigate to="/login" />}
      />
      <Route
        path="/container"
        element={isAuthenticated ? <ContainerBlogs /> : <Navigate to="/login" />}
      />
      <Route
        path="/about-author"
        element={isAuthenticated ? <AuthorBlogs /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default AppRoutes;
