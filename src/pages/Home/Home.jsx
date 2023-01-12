// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Info, Icon, Header, Welcome, Message, ContactsLink } from './Home.styled';
import { TiContacts } from 'react-icons/ti';
import { getUserToken } from 'Store/auth/authSlice';

export default function Home() {
  const token = useSelector(getUserToken);
  return (
    <Container>
      <Info>
        <Icon>
          <TiContacts size="70px" color="#377d71" />
        </Icon>
        <Header>
          Welcome to <Welcome>Phonebook</Welcome>!
        </Header>
        <Message>
          You no longer need to keep contacts in your head,
          <br /> we'll remember them for you.
        </Message>
        <ContactsLink to="/login">
          {token ? 'My contacts' : "Let's start"}
        </ContactsLink>
      </Info>
    </Container>
  );
}