import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import redirect from './redirect';

const apiUrl = import.meta.env.VITE_HIGH_BRIDGE_APP_API_URL;

export function checkLoginStatus() {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }
  return true;
}

export async function loginRequest(data) {
  const url = `${apiUrl}/login`;

  const response = await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.data.error) {
    throw new Error(response.data.error);
  }

  return response.data;
}

export async function getJWT() {
  const token = localStorage.getItem('token');

  if (!token) {
    logout();
    return null;
  }

  const parsed = JSON.parse(token);
  const decoded = jwtDecode(parsed.access);

  if (decoded.exp !== undefined && decoded.exp - Date.now() / 1000 < 60) {
    try {
      const response = await axios.put(
        `${apiUrl}/user/${decoded.sub}/token`,
        { refreshToken: parsed.refresh },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const newToken = response.data;

      if (newToken.error) {
        throw new Error(newToken.error);
      }

      saveToken(newToken);
      return newToken.access;
    } catch (error) {
      console.error('Error refreshing token:', error.message || error);
      logout();
      return null;
    }
  }

  return parsed.access;
}

export function logout() {
  removeToken();
  redirect('/login');
}

export function removeToken() {
  localStorage.removeItem('token');
}

export function saveToken(data) {
  localStorage.setItem('token', JSON.stringify(data));
}
