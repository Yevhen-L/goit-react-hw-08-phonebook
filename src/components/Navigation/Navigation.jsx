import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu';

const Navigation = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Home</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <UserMenu />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
