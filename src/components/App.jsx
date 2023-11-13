import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Register from './Register/Register';
import Login from './Login/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/contactForm" element={<ContactForm />} />
        <PrivateRoute path="/contactList" element={<ContactList />} />
      </Routes>
    </Router>
  );
};

export default App;
