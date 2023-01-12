import { useSelector } from 'react-redux';
import { getUserName } from 'Store/auth/authSlice';
import { useLogoutMutation } from 'Store/auth/authApi';
import { Button, Container, Text, UserName } from './UserMenu.styled';

export default function UserMenu() {
  const name = useSelector(getUserName);
  const [logout, { isLoading }] = useLogoutMutation();
  return (
    <Container>
      <Text>
        Hello, <UserName>{name}</UserName>
      </Text>
      <Button
        to="/"
        disabled={isLoading}
        onClick={() => logout()}
      >
        Sign out
      </Button>
    </Container>
  );
}