import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from '../../redux/contacts-filter/selectors';
import { fetchContacts } from '../../redux/contacts-filter/operations';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import {
  ContactsWrap,
  StyledPTypography,
  StyledTypography,
} from './Contacts.styled';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsWrap>
      <StyledTypography variant="h3">Your personal Phonebook</StyledTypography>
      <ContactForm />
      {contacts.length !== 0 ? (
        <>
          <StyledTypography
            sx={{
              marginTop: '20px',
            }}
            variant="h4"
          >
            Contacts
          </StyledTypography>
          <Filter />
          <ContactList />
        </>
      ) : (
        <>
          <StyledPTypography variant="h6">
            There are no contacts in your Phonebook
          </StyledPTypography>
        </>
      )}
    </ContactsWrap>
  );
};

export default Contacts;
