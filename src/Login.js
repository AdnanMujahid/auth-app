import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (
      storedUser &&
      loginData.username === storedUser.username &&
      loginData.password === storedUser.password
    ) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>🔐 Login</h2>

        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button type="submit" style={submitBtnStyle}>
          Login
        </button>

        <p style={signupTextStyle}>
          Don&apos;t have an account?{' '}
          <button onClick={goToSignup} style={signupBtnStyle}>
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'linear-gradient(to right, #6a11cb, #2575fc)',
};

const formStyle = {
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
  textAlign: 'center',
};

const headingStyle = {
  marginBottom: '25px',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontSize: '16px',
};

const submitBtnStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#4f46e5',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background 0.3s ease',
};

const signupTextStyle = {
  marginTop: '20px',
  fontSize: '14px',
  color: '#555',
};

const signupBtnStyle = {
  background: 'none',
  color: '#2563eb',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'underline',
  fontWeight: 'bold',
};

export default Login;
