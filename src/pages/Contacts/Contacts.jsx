import { useContacts } from '../../Hooks/useContact';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import toast, { Toaster } from 'react-hot-toast';
import { Header, Text, Loading } from './Contacts.styled';

export default function Contacts() {
  const { filteredContacts, error, isLoading, isSuccess } = useContacts();
  const contactsNumber = filteredContacts.length;

  return (
    <div>
        <Toaster position="top-center" />
      <Header>
        You have <Text>{contactsNumber}</Text> contacts
      </Header>
      <Filter />
      {isLoading && (<Loading>...Loading</Loading>
      )}
      {isSuccess && filteredContacts && (
        <ContactList contacts={filteredContacts} />
      )}
      {error && toast.error(`Sorry, we can't find your contacts :(`) }
    </div>
  );
}