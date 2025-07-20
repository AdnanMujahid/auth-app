import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2>🌐 Dashboard</h2>
        <button style={logoutButtonStyle} onClick={handleLogout}>
          Logout
        </button>
      </div>

      <p style={welcomeStyle}>Welcome to your account!</p>

      <div style={tilesGridStyle}>
        <div
          style={{ ...tileStyle, background: 'linear-gradient(to right, #667eea, #764ba2)' }}
          onClick={() => navigate('/devops')}
        >
          DevOps
        </div>
        <div
          style={{ ...tileStyle, background: 'linear-gradient(to right, #43cea2, #185a9d)' }}
          onClick={() => navigate('/docker')}
        >
          Docker
        </div>
        <div
          style={{ ...tileStyle, background: 'linear-gradient(to right, #ff512f, #dd2476)' }}
          onClick={() => navigate('/container')}
        >
          Container
        </div>
      </div>
    </div>
  );
}

const containerStyle = {
  padding: '40px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f9fafb',
  minHeight: '100vh',
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoutButtonStyle = {
  backgroundColor: '#ef4444',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'background 0.3s',
};

const welcomeStyle = {
  fontSize: '18px',
  marginTop: '10px',
  marginBottom: '30px',
  color: '#333',
};

const tilesGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
};

const tileStyle = {
  padding: '50px 20px',
  color: 'white',
  borderRadius: '15px',
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  userSelect: 'none',
};

export default Dashboard;
