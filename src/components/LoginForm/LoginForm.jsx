import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { Form, Label, Input } from './LoginForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const user = {
      email: email.trim(),
      password: password.trim(),
    };

    dispatch(login(user));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>
      <div>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
          placeholder="Enter password"
        />
      </div>

      <button type="submit">Login</button>
    </Form>
  );
};

export default LoginForm;
