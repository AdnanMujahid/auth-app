import React from 'react';
import { Link } from 'react-router-dom';

function ContainerBlogs() {
  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>🐳 Container Blogs</h2>
      <p style={paragraphStyle}>
        Containers are lightweight, portable units for running applications. Docker is the most popular container platform that allows developers to package applications along with all their dependencies.
      </p>

      <p style={paragraphStyle}>
        Docker uses images to create containers. These images are built from Dockerfiles, which define the application environment. Containers offer consistency across development, testing, and production.
      </p>

      <p style={paragraphStyle}>
        <strong style={strongStyle}>Key Docker concepts include:</strong>
        <ul style={listStyle}>
          <li><strong>Images:</strong> Read-only templates used to create containers</li>
          <li><strong>Containers:</strong> Running instances of images</li>
          <li><strong>Volumes:</strong> Persistent data storage for containers</li>
        </ul>
      </p>

      <p style={paragraphStyle}>
        Following best practices such as using minimal base images, cleaning up unnecessary layers, and securing container configurations improves performance and security.
      </p>

      <hr style={hrStyle} />

      <p style={linkContainerStyle}>
        👉 Read more about the <Link to="/about-author" style={linkStyle}>Author</Link>
      </p>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: '30px',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f7fb',
  borderRadius: '10px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  lineHeight: '1.6',
  marginBottom: '30px',
};

const headerStyle = {
  fontSize: '2rem',
  color: '#4c6ef5',
  marginBottom: '15px',
};

const paragraphStyle = {
  fontSize: '1.1rem',
  color: '#333',
  marginBottom: '15px',
};

const strongStyle = {
  fontWeight: 'bold',
  color: '#4c6ef5',
};

const listStyle = {
  listStyleType: 'disc',
  marginLeft: '20px',
  color: '#555',
};

const hrStyle = {
  margin: '30px 0',
  borderColor: '#ddd',
  borderWidth: '1px',
};

const linkContainerStyle = {
  textAlign: 'center',
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

export default ContainerBlogs;
