import { createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../../helpers/request';
const apiUrl = import.meta.env.VITE_HIGH_BRIDGE_APP_API_URL;

export const getOrders = createAsyncThunk(
  'order/getOrders',
  async ({ page, navigate }, { rejectWithValue }) => {
    try {
      const orders = await request(
        navigate,
        `${apiUrl}/admin/orders?page=${page}`
      );

      return { orders };
    } catch (error) {
      console.log('Error: ', error.response.data.error);

      return rejectWithValue({
        status: error.response.data.statusCode,
        errorMessage: error.response.data.error,
      });
    }
  }
);

export const getOrder = createAsyncThunk(
  'order/getOrder',
  async ({ orderId, navigate }, { rejectWithValue }) => {
    try {
      const order = await request(navigate, `${apiUrl}/admin/order/${orderId}`);

      return { order };
    } catch (error) {
      console.log('Error: ', error.response.data.error);
      
      return rejectWithValue({
        status: error.response.data.statusCode,
        errorMessage: error.response.data.error,
      });
    }
  }
);
