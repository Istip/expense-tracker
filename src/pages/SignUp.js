import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Deconstruct useSignup hook
  const { signUp, loading, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password, name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label>
          <span>Name: </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

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
          {loading ? 'Loading..' : 'Sign Up'}
        </button>
      </form>
      <br />
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUp;
