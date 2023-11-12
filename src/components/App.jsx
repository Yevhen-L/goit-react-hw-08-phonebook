import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route path="/home" component={Register} />
      <Route path="/about" component={Login} />
      <Route path="/contact-form" component={ContactForm} />
      <Route path="/contact-list" component={ContactList} />
    </Router>
  );
};

export default App;
