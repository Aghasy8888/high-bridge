import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: 'test',
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setTest(state, { payload }) {
      state.test = payload;
    },
  },
});

export const {
    setTest
} = generalSlice.actions;

export const selectTest = (state) => state.generalReducer.test;

export default generalSlice.reducer;
