import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    console.log('token :>> ', token);
    return (authInstance.defaults.headers.autorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.autorization = '';
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
  const { data } = await authInstance.post('/users/logout');
  setToken();
  console.log('data :>> ', data);
  return data;
};

export default authInstance;
