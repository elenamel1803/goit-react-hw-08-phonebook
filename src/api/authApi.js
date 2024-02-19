import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const requestSignup = async body => {
  const { data } = await authInstance.post('/users/signup', body);
  setToken(data.token);
  return data;
};

export const requestLogin = async body => {
  const { data } = await authInstance.post('/users/login', body);
  setToken(data.token);
  return data;
};

export const requestCurrent = async token => {
  setToken(token);
  try {
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const requestLogout = async () => {
  await authInstance.post('/users/logout');
  setToken();
};

export default authInstance;
