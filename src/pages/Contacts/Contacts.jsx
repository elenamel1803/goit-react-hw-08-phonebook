import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { AppWrap, ContactsTitle, Gradient, Title } from './Contacts.styled';

const Contacts = () => {
  return (
    <>
      <AppWrap>
        <Title>Phonebook</Title>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />
      </AppWrap>

      {/* <Gradient /> */}
    </>
  );
};

export default Contacts;
