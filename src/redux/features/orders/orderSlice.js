import { createSlice } from '@reduxjs/toolkit';
import { getOrders } from './orderService';

const initialState = {
  orders: [],
  pagination: null,
  loading: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.fulfilled, (state, { payload }) => {
        state.orders = payload.orders.online;
        state.pagination = payload.orders.pagination;
        state.loading = false;
      })
      .addMatcher(
        (action) => [getOrders.pending.type].includes(action.type),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) => [getOrders.rejected.type].includes(action.type),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const selectOrderLoading = (state) => state.orderReducer.loading;
export const selectOrders = (state) => state.orderReducer.orders;
export const selectOrderPagination = (state) => state.orderReducer.pagination;

export default orderSlice.reducer;
