// import axios from 'axios';
import authInstance from 'api/authApi';

// const contactsInstance = axios.create({
//   baseURL: 'https://65c0f743dc74300bce8d135c.mockapi.io',
// });

export const requestAllContacts = async () => {
  const { data } = await authInstance.get('/contacts');
  return data;
};

export const requestAddContact = async body => {
  const { data } = await authInstance.post('/contacts', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await authInstance.delete(`/contacts/${id}`);
  return data;
};
