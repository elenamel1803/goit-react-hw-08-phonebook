import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/authOperations';
import { Form, Label, Input } from './RegisterForm.styled';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

    const newUser = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    };
    console.log('newUser :>> ', newUser);
    dispatch(signup(newUser));

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
          placeholder="Entrer name"
        />
      </div>
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

      <button type="submit">Register</button>
    </Form>
  );
};

export default RegisterForm;
