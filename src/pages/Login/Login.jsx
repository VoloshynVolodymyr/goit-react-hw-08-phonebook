import LoginForm from 'components/LoginForm/LoginForm';
import { Container, Header, Text, ContactsLink } from './Login.styled';

export default function Login() {
  return (
    <Container>
      <Header>Sign in to Phonebook</Header>
      <LoginForm />
      <Text>
        New to Phonebook?
        <ContactsLink to="/register">
          Create an account
        </ContactsLink>
      </Text>
    </Container>
  );
}