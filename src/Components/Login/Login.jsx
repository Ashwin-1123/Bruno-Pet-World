import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;
      if (isLogin) {
        // Login
        response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
      } else {
        // Register
        response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password, email }),
        });
      }

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          localStorage.setItem('token', data.token);
          setMessage('Login successful!');
          navigate('/');
          // Redirect or update UI to indicate login success
        } else {
          setMessage('Registration successful! Please log in.');
          setIsLogin(true); // Switch back to login form after successful registration
        }
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-register-container">
      <form className="form-container active" onSubmit={handleSubmit}>
        <h2 className="form-title">{isLogin ? 'Login' : 'Register'}</h2>
        <input
          type="text"
          className="form-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isLogin && (
          <input
            type="email"
            className="form-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}
        <button type="submit" className="form-button">
          {isLogin ? 'Login' : 'Register'}
        </button>
        <p className="form-para">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
        </p>
        <p className="form-link" onClick={toggleForm}>
          {isLogin ? 'Sign up' : 'Login'}
        </p>
        {message && <p className="form-message">{message}</p>}
      </form>
    </div>
  );
};
