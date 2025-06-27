import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the JWT token
api.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('jwt_token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token expiration/refresh if needed
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Example: If 401 Unauthorized, maybe redirect to login
    if (error.response && error.response.status === 401) {
      console.log('Unauthorized request. Redirecting to login...');
      // typeof window !== 'undefined' && (window.location.href = '/login');
    }
    return Promise.reject(error);
  }
);

export { api };
