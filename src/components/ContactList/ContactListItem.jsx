import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts-filter/operations';
import { Item, Button, Text } from './ContactList.styled';

const ContactListItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      <Text id={id}>
        {name}: {number}
      </Text>
      <Button onClick={onDeleteContact}>Delete</Button>
    </Item>
  );
};

export default ContactListItem;
