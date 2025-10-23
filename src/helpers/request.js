import { getJWT, logout } from './auth';
import axios from 'axios';

const defaultError = { message: 'Something went wrong!' };

async function request(navigate, url, method, body) {
  const jwt = await getJWT(navigate);

  if (!jwt) {
    return Promise.reject(defaultError);
  }

  const config = {
    url,
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  };

  if (body) {
    config.data = body;
  }

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      logout(navigate);
    }

    throw error;
  }
}

export default request;
