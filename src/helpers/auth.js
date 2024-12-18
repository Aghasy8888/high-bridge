import axios from 'axios';

const apiUrl = import.meta.env.VITE_HIGH_BRIDGE_APP_API_URL;

export function checkLoginStatus() {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }
  return true;
}

export async function loginRequest(data) {
  const url = `${apiUrl}/admin/login`;

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

export async function getJWT(navigate) {
  const token = localStorage.getItem('token');

  if (!token) {
    logout(navigate);
    return null;
  }

  const parsed = JSON.parse(token);

  return parsed
}

export function logout(navigate) {
  removeToken();
  navigate('/login');
}

export function removeToken() {
  localStorage.removeItem('token');
}

export function saveToken(data) {
  localStorage.setItem('token', JSON.stringify(data));
}
