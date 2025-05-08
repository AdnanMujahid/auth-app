import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [user, setUser] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful');
    navigate('/login');
  };

  return (
    <div style={containerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2 style={headingStyle}>📝 Sign Up</h2>

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

        <button type="submit" style={submitBtnStyle}>Sign Up</button>
      </form>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'linear-gradient(to right, #ff6a00, #ee0979)',
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
  backgroundColor: '#f43f5e',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background 0.3s ease',
};

export default Signup;
