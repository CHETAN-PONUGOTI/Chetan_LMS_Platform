import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginService } from '../api/authService';
import { useAuth } from '../hooks/useAuth';
// CORRECTED PATH
import LoginForm from '../components/Auth/LoginForm';

function LoginPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (formData) => {
    try {
      const { data } = await loginService(formData);
      login(data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to login');
    }
  };

  return (<div><h2>Login</h2><LoginForm onLogin={handleLogin} error={error} /></div>);
}
export default LoginPage;