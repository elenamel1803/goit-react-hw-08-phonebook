import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/auth/authOperations';
import { selectAuthError } from '../../redux/auth/authSelectors';
import { Button } from '@mui/material';
import { Error, StyledBox, StyledTextField } from './RegisterForm.styled';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(selectAuthError);

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

    dispatch(signup(newUser));

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <StyledBox
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <StyledTextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
        <StyledTextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <StyledTextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" size="large">
          Register
        </Button>
      </StyledBox>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default RegisterForm;
