import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { selectAuthError } from '../../redux/auth/authSelectors';
import { Button } from '@mui/material';
import { Error, StyledBox, StyledTextField } from './LoginForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(selectAuthError);

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
    <>
      <StyledBox
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
      >
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
          Login
        </Button>
      </StyledBox>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default LoginForm;
