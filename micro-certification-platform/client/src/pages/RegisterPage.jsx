import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register as registerService } from '../api/authService';
import { useAuth } from '../hooks/useAuth';
import RegisterForm from '../components/Auth/RegisterForm';

function RegisterPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (formData) => {
    try {
      const { data } = await registerService(formData);
      login(data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to register');
    }
  };

  return (<div><h2>Register</h2><RegisterForm onRegister={handleRegister} error={error} /></div>);
}
export default RegisterPage;