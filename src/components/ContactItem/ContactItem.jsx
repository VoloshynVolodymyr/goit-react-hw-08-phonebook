import { useDeleteContactMutation } from 'Store/contacts/contactsApi';
import { AiOutlineDelete } from 'react-icons/ai';

import { Button, Item, Phone } from './ContactItem.styled';

export default function ContactItem({ contact }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { id, name, number } = contact;

  return (
    <Item key={id}>
      <p>
        {name}: <Phone>{number}</Phone>
      </p>
      <Button
        type="button"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        <AiOutlineDelete size="20px" />
        <span>{isLoading ? 'Deleting...' : 'Delete'}</span>
      </Button>
    </Item>
  );
}