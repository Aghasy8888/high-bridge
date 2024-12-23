import { createSlice } from '@reduxjs/toolkit';
import { getOrder, getOrders } from './orderService';

const initialState = {
  order: {},
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
      .addCase(getOrder.fulfilled, (state, { payload }) => {
        state.order = payload.order.data;
        state.loading = false;
      })
      .addMatcher(
        (action) => {
          return [getOrders.pending.type, getOrder.pending.type].includes(
            action.type
          );
        },
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) =>
          [getOrders.rejected.type, getOrder.rejected.type].includes(
            action.type
          ),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const selectOrderLoading = (state) => state.orderReducer.loading;
export const selectOrders = (state) => state.orderReducer.orders;
export const selectOrderPagination = (state) => state.orderReducer.pagination;
export const selectOrderInDetails = (state) => state.orderReducer.order;

export default orderSlice.reducer;
