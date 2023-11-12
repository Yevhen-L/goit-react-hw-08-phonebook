import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const requestContacts = async () => {
  try {
    const { data } = await instance.get('/contacts');
    return data;
  } catch (error) {
    throw new Error('Failed to fetch contacts');
  }
};

export const requestAddContact = async newContact => {
  try {
    const { data } = await instance.post('/contacts', newContact);
    return data;
  } catch (error) {
    throw new Error('Failed to add a contact');
  }
};

export const requestDeleteContact = async id => {
  try {
    const { data } = await instance.delete(`/contacts/{contactId}`);
    return data;
  } catch (error) {
    throw new Error('Failed to delete a contact');
  }
};

export const requestRegister = async userData => {
  try {
    const { data } = await instance.post('/users/signup', userData);
    return data;
  } catch (error) {
    throw new Error('Registration failed');
  }
};

export const requestLogin = async userData => {
  try {
    const { data } = await instance.post('/users/login', userData);
    return data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const requestLogout = async () => {
  try {
    const { data } = await instance.post('/users/logout');
    return data;
  } catch (error) {
    throw new Error('Logout failed');
  }
};

export const requestCurrentUser = async () => {
  try {
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    throw new Error('Failed to fetch current user');
  }
};
