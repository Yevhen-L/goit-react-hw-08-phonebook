import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    // Якщо користувач не авторизований, перенаправити його на /login
    navigate('/login');
    return null; // Або ви можете повернути щось інше, наприклад, пустий елемент
  }

  return <Route {...rest} element={<Element />} />;
};

export default PrivateRoute;
