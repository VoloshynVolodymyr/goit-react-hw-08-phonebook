import { useContacts } from '../../Hooks/useContact';
import ContactForm from 'components/ContactForm/ContactForm';
import { Container, AddContactHeader } from './AddContact.styled';
export default function AddContact() {
  const { filteredContacts } = useContacts();
  return (
    <Container>
      <AddContactHeader>
        Add new contact <br /> to your Phonebook
      </AddContactHeader>
      <ContactForm contacts={filteredContacts} />
    </Container>
  );
}