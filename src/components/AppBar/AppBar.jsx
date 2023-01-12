import { BsHouseDoorFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { NavLinkStyle, Header, Nav, LinkStyle, HomeText, NavToContacts, NavToLogin } from './AppBar.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import { getUserToken } from 'Store/auth/authSlice';

export default function AppBar() {
  const userToken = useSelector(getUserToken);
  return (
    <Header>
      <Nav>
        <LinkStyle to="/">
          <BsHouseDoorFill />
          <HomeText>Home</HomeText>
        </LinkStyle>
        {userToken && (
          <NavToContacts>
            <NavLinkStyle to="/contacts-list">
              My contacts
            </NavLinkStyle>
            <NavLinkStyle to="/contacts-add">
              Add contact
            </NavLinkStyle>
          </NavToContacts>
        )}
      </Nav>
      {!userToken && (
        <NavToLogin>
          <NavLinkStyle to="/login">
            Sign in
          </NavLinkStyle>
          <NavLinkStyle to="/register">
            Register
          </NavLinkStyle>
        </NavToLogin>
      )}
      {userToken && <UserMenu />}
    </Header>
  );
}