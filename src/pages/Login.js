import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error, loading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>
          <span>Email: </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Password: </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Loading..' : 'Login'}
        </button>
      </form>
      <br />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
