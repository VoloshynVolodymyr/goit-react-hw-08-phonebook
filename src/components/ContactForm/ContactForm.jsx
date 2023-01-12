import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useAddContactMutation } from 'Store/contacts/contactsApi';
import { Button, Form, Input, InputWrapper, Label } from './ContactForm.styled';

export default function ContactForm({ contacts }) {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const [addContact, { isLoading }] = useAddContactMutation();

  const handleFormSubmit = async e => {
    e.preventDefault();

    const contact = { name: contactName, number: contactNumber };

    if (
      contacts.some(
        ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      toast.error(`${contact.name} is already in contacts`);
      return;
    }

    addContact(contact);

    setContactName('');
    setContactNumber('');
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name': {
        setContactName(value);
        break;
      }
      case 'phone': {
        setContactNumber(value);
        break;
      }
      default:
        throw new Error(`Unsuported input name ${name}`);
    }
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <>
    <Toaster position="top-center" />
      {/* isError && {toast.error(`Something went wrong. Please try again.`)}; */}
      
      <Form onSubmit={handleFormSubmit}>
        <InputWrapper>
          <Label htmlFor={nameId}>
            Name
          </Label>
          <Input
            type="text"
            name="name"
            id={nameId}
            value={contactName}
            onChange={handleInputChange}
            autoComplete="off"
            autoFocus
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputWrapper>
        <div>
          <Label htmlFor={numberId}>
            Number
          </Label>
          <Input
            type="tel"
            name="phone"
            id={numberId}
            value={contactNumber}
            autoComplete="off"
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add contact'}
        </Button>
      </Form>
    </>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};