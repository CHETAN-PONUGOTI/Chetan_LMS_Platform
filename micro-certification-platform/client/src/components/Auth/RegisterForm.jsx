import React, { useState } from 'react';

function RegisterForm({ onRegister, error }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); onRegister(formData); };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group"><input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /></div>
      <div className="form-group"><input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required /></div>
      <div className="form-group"><input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required /></div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
}
export default RegisterForm;