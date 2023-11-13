import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div>
      <h2>Welcome! Please register or login to access your contacts.</h2>
      <p>
        <Link to="/register">Register</Link> or <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Welcome;
