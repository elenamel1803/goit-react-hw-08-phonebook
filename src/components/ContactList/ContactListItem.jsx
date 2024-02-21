import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts-filter/operations';
import { ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledIconButton } from './ContactList.styled';

const ContactListItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem
      id={id}
      secondaryAction={
        <StyledIconButton
          edge="end"
          aria-label="delete"
          onClick={onDeleteContact}
        >
          <DeleteIcon />
        </StyledIconButton>
      }
    >
      {name}: {number}
    </ListItem>
  );
};

export default ContactListItem;
