import { createSlice } from '@reduxjs/toolkit';
import { login } from './userService';
import { saveToken } from '../../../helpers/auth';
import { LOGIN_SUCCESS_MESSAGE } from '../../../../constants';

const initialState = {
  isAuthenticated: null,
  loading: false,
  userInfo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAuth(state, { payload }) {
      state.isAuthenticated = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        const {
          res: {
            data: { token, user },
          },
        } = payload;

        state.userInfo = user;
        state.successMessage = LOGIN_SUCCESS_MESSAGE;
        state.isAuthenticated = true;
        state.loading = false;
        saveToken(token);
      })
      .addMatcher(
        (action) => [login.pending.type].includes(action.type),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => [login.rejected.type].includes(action.type),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const { setUserAuth } = authSlice.actions;

export const selectAuthLoading = (state) => state.authReducer.loading;
export const selectAuthError = (state) => state.authReducer.errorMessage;
export const selectUserInfo = (state) => state.authReducer.userInfo;
export const selectIsAuthenticated = (state) =>
  state.authReducer.isAuthenticated;

export default authSlice.reducer;
