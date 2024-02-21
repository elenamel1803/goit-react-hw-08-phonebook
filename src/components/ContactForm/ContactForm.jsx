import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatName, formatNumber } from 'services/helpers';
import { selectError } from '../../redux/contacts-filter/selectors';
import { addContact } from '../../redux/contacts-filter/operations';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { Button } from '@mui/material';
import { StyledBox, StyledTextField, Error } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      name: formatName(name.trim()),
      number: formatNumber(number.trim()),
    };

    dispatch(addContact(newContact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
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
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <StyledTextField
          id="outlined-basic"
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          value={number}
          required
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          startIcon={<PersonAddAltIcon />}
        >
          Add contact
        </Button>
      </StyledBox>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default ContactForm;
