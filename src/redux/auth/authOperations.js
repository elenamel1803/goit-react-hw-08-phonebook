import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestSignup,
  requestLogin,
  requestCurrent,
  requestLogout,
} from '../../api/authApi';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await requestSignup(body);
      return data;
    } catch (error) {
      console.log('error :>> ', error);
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await requestLogin(body);
      return data;
    } catch (error) {
      console.log('error :>> ', error);
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await requestCurrent(auth.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await requestLogout();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message || error.message);
    }
  }
);
