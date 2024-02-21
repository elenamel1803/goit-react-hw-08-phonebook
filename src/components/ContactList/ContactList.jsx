import { useSelector } from 'react-redux';
import ContactListItem from './ContactListItem';
import Loader from 'components/Loader/Loader';
import {
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/contacts-filter/selectors';
import { List } from './ContactList.styled';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <List>
        {visibleContacts.length > 0 &&
          visibleContacts.map(contact => (
            <ContactListItem key={contact.id} contact={contact} />
          ))}
      </List>
    </>
  );
};

export default ContactList;
