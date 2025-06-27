import { useState, useEffect } from 'react';
import { User } from '@/types'; // Assuming you have a User type defined
// import { api } from '@/lib/api'; // Assuming you have an API client

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // This is a placeholder. In a real app, you'd check for a JWT in localStorage/cookies
        // and validate it with your backend, or use a library like NextAuth.js.
        const token = localStorage.getItem('jwt_token');
        if (token) {
          // Example: Call a backend endpoint to validate token and get user info
          // const response = await api.get('/auth/profile');
          // setAuthState({
          //   user: response.data.user,
          //   isAuthenticated: true,
          //   isLoading: false,
          // });
          // For now, simulate a logged-in user
          setAuthState({
            user: { id: '1', email: 'test@example.com', name: 'Test User' },
            isAuthenticated: true,
            isLoading: false,
          });
        } else {
          setAuthState({
            user: null,
            isAuthenticated: false,
            isLoading: false,
          });
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (token: string, user: User) => {
    localStorage.setItem('jwt_token', token);
    setAuthState({
      user,
      isAuthenticated: true,
      isLoading: false,
    });
  };

  const logout = () => {
    localStorage.removeItem('jwt_token');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  return { ...authState, login, logout };
};

export default useAuth;
