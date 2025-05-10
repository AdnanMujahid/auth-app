import React from 'react';

function AuthorBlogs() {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>✍️ About the Author</h2>
      <p style={introStyle}>
        <strong style={nameStyle}>Adnan Mujahid</strong> is a passionate software engineer and DevOps enthusiast with a strong background
        in full-stack development and cloud-native technologies.
      </p>

      <p style={paragraphStyle}>
        He enjoys simplifying complex systems, automating workflows, and helping teams deliver software faster and more reliably.
        Adnan also writes technical blogs to share his knowledge and contribute to the developer community.
      </p>

      <p style={skillsStyle}>
        <strong>Skills:</strong> JavaScript, React, Node.js, Docker, Kubernetes, CI/CD, GitHub Actions, Firebase, Flutter, and more.
      </p>

      <p style={connectStyle}>
        You can connect with him on:
        <ul style={socialLinksStyle}>
          <li>
            <a href="https://github.com/adnanmujahid" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a>
          </li>
          <li>
            <a href="https://linkedin.com/in/adnanmujahid" target="_blank" rel="noopener noreferrer" style={linkStyle}>LinkedIn</a>
          </li>
        </ul>
      </p>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '30px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f7f9fc',
  borderRadius: '10px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  lineHeight: '1.6',
  maxWidth: '800px',
  margin: '30px auto',
};

const headerStyle = {
  fontSize: '2rem',
  color: '#4c6ef5',
  marginBottom: '20px',
  textAlign: 'center',
};

const introStyle = {
  fontSize: '1.2rem',
  color: '#333',
  marginBottom: '20px',
};

const nameStyle = {
  color: '#e91e63',
  fontWeight: 'bold',
};

const paragraphStyle = {
  fontSize: '1.1rem',
  color: '#333',
  marginBottom: '15px',
};

const skillsStyle = {
  fontSize: '1.1rem',
  color: '#4caf50',
  marginBottom: '15px',
};

const connectStyle = {
  fontSize: '1.1rem',
  color: '#333',
  marginBottom: '20px',
};

const socialLinksStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
  margin: '10px 0',
};

const linkStyle = {
  color: '#007BFF',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: 'color 0.3s ease',
};

linkStyle[':hover'] = {
  color: '#0056b3',
};

export default AuthorBlogs;
