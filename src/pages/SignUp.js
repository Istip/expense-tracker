import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

// UI imports
import Form from '../components/UI/Form';
import Divider from '../components/UI/Divider';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';

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
    <>
      <Form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength="8"
          label="Your nickname"
          icon={<i className="fas fa-user"></i>}
          required
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<i className="fas fa-at"></i>}
          required
        />

        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<i className="fas fa-key"></i>}
          required
        />

        <Divider />
        <Button type="submit" disabled={loading}>
          {loading ? 'Loading..' : 'Sign Up'}
        </Button>
      </Form>
      <br />
      {error && <small>{error}</small>}
    </>
  );
};

export default SignUp;
