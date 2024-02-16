import contactsInstance from 'api/authApi';

export const requestAllContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const requestAddContact = async body => {
  const { data } = await contactsInstance.post('/contacts', body);
  return data;
};

export const requestDeleteContact = async id => {
  const { data } = await contactsInstance.delete(`/contacts/${id}`);
  return data;
};
