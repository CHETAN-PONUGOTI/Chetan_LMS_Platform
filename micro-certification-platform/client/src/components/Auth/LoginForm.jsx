import React, { useState } from 'react';

function LoginForm({ onLogin, error }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); onLogin(formData); };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group"><input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /></div>
      <div className="form-group"><input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /></div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}
export default LoginForm;