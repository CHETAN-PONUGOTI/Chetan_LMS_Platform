import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// --- THIS IS THE FIX ---
import { useAuth } from '../../hooks/useAuth.js'; // Import useAuth from its own file
// -----------------------

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#333', color: 'white' };
  const linkStyle = { color: 'white', textDecoration: 'none', margin: '0 1rem' };
  const buttonStyle = { background: 'transparent', border: '1px solid white', color: 'white' };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}><h2>Quiz Platform</h2></Link>
      <div>
        {isAuthenticated ? (
          <button onClick={handleLogout} style={buttonStyle}>Logout</button>
        ) : (
          <><Link to="/login" style={linkStyle}>Login</Link><Link to="/register" style={linkStyle}>Register</Link></>
        )}
      </div>
    </nav>
  );
}
export default Navbar;