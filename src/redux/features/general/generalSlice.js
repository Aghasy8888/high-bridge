import { createSlice } from '@reduxjs/toolkit';
import { login } from '../auth/userService';
import { getOrder, getOrders } from '../orders/orderService';
import { TOKEN_EXPIRED_NOTIFICATION } from '../../../../constants';

const initialState = {
  test: '',
  errorMessage: null,
  successMessage: null,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setTest(state, { payload }) {
      state.test = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state) => {
        state.errorMessage = null;
        state.successMessage = 'Logged in successfully';
      })
      .addMatcher(
        (action) =>
          [
            login.rejected.type,
            getOrders.rejected.type,
            getOrder.rejected.type,
          ].includes(action.type),
        (state, { payload: { errorMessage, status } }) => {
          state.loading = false;
          state.successMessage = null;
          state.errorMessage =
            status === 401 ? TOKEN_EXPIRED_NOTIFICATION : errorMessage;
        }
      );
  },
});

export const { setTest } = generalSlice.actions;

export const selectTest = (state) => state.generalReducer.test;
export const selectErrorMessage = (state) => state.generalReducer.errorMessage;
export const selectSuccessMessage = (state) =>
  state.generalReducer.successMessage;

export default generalSlice.reducer;
