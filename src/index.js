import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import './index.css';
// import App from 'components/App';
// import store from 'Redux/store';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from 'Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Register} />
        <Route path="/about" component={Login} />
        <Route path="/contact-form" component={ContactForm} />
        <Route path="/contact-list" component={ContactList} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
