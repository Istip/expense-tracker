import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

// UI imports
import Button from '../components/UI/Button';
import Form from '../components/UI/Form';
import Divider from '../components/UI/Divider';
import Input from '../components/UI/Input';

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
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>

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
          {loading ? 'Loading..' : 'Login'}
        </Button>
        {error && (
          <small>
            <Divider />
            {error}
          </small>
        )}
      </Form>
      <br />
    </div>
  );
};

export default Login;
