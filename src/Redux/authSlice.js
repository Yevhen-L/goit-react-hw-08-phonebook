import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestRegister,
  requestLogin,
  requestLogout,
  requestCurrentUser,
} from 'Services/Api';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async userData => {
    const response = await requestRegister(userData);
    return response;
  }
);

export const loginUser = createAsyncThunk('auth/loginUser', async userData => {
  const response = await requestLogin(userData);
  return response;
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  const response = await requestLogout();
  return response;
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async () => {
    const response = await requestCurrentUser();
    return response;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
