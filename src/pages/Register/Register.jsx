import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Header, WrapperRegister } from './Register.styled';

export default function Register() {
  return (
    <WrapperRegister>
      <Header>Let's create your account</Header>
      <RegisterForm />
    </WrapperRegister>
  );
}