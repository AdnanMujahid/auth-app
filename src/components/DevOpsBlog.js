import React from 'react';
import { Link } from 'react-router-dom';

function DevOpsBlog() {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>⚙️ DevOps Blog</h2>
      <p style={paragraphStyle}>
        DevOps combines software development and IT operations to shorten the development lifecycle,
        delivering features, fixes, and updates frequently in close alignment with business objectives.
      </p>

      <p style={paragraphStyle}>
        Key practices include continuous integration, continuous delivery, infrastructure as code,
        and monitoring to improve software quality and responsiveness.
      </p>

      <hr style={dividerStyle} />

      <p style={readMoreStyle}>
        👉 Read more about the{' '}
        <Link to="/about-author" style={linkStyle}>Author</Link>
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

const paragraphStyle = {
  fontSize: '1.1rem',
  color: '#333',
  marginBottom: '20px',
};

const dividerStyle = {
  margin: '20px 0',
  border: '1px solid #ddd',
};

const readMoreStyle = {
  fontSize: '1.1rem',
  color: '#333',
  marginTop: '20px',
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

export default DevOpsBlog;
