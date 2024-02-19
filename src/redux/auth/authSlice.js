import { createSlice } from '@reduxjs/toolkit';
import { signup, login, current, logout } from './authOperations';
import { pending, rejected } from '../../shared/redux';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  isLoading: false,
  error: null,
};

const fulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLogin = true;
  state.isLoading = false;
  state.error = null;
};

const currentFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLogin = true;
  state.isLoading = false;
  state.error = null;
};

const currentRejected = state => {
  state.isLoading = false;
  state.token = '';
};

const logoutFulfilled = state => {
  state.user = {};
  state.token = '';
  state.isLogin = false;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, pending)
      .addCase(signup.fulfilled, fulfilled)
      .addCase(signup.rejected, rejected)

      .addCase(login.pending, pending)
      .addCase(login.fulfilled, fulfilled)
      .addCase(login.rejected, rejected)

      .addCase(current.pending, pending)
      .addCase(current.fulfilled, currentFulfilled)
      .addCase(current.rejected, currentRejected)

      .addCase(logout.pending, pending)
      .addCase(logout.fulfilled, logoutFulfilled)
      .addCase(logout.rejected, rejected);
  },
});

export const authReducer = authSlice.reducer;
