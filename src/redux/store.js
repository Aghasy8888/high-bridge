import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './features/general/generalSlice';
import authReducer from './features/auth/authSlice';
import logger from 'redux-logger';

const middleware = (getDefaultMiddleware) => {
  if (import.meta.env.MODE === 'development') {
    return getDefaultMiddleware().concat(logger);
  }
  return getDefaultMiddleware();
};

const store = configureStore({
  reducer: {
    generalReducer,
    authReducer,
  },
  middleware,
  devTools: import.meta.env.MODE === 'development',
});

export default store;
