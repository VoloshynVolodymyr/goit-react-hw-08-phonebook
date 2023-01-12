import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useRegisterMutation } from 'Store/auth/authApi';
import { Button, ErrorMessage, FieldWrapper, Form, Input, Label } from './RegisterForm.styled';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register, { isLoading, isError }] = useRegisterMutation();

  const handleFormSubmit = e => {
    e.preventDefault();
    const contact = { name, email, password };
    register(contact);
  };

  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      default:
        throw new Error(`Unsuported input name ${name}`);
    }
  };

  return (
    <>
      {isError && (
        <ErrorMessage>Something went wrong. Please try again.</ErrorMessage>
      )}
      <Form onSubmit={handleFormSubmit}>
        <FieldWrapper>
          <Label htmlFor={nameId}>
            Username
          </Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            autoComplete="off"
            autoFocus
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor={emailId}>
            Email adress
          </Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor={passwordId}>
            Password
          </Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
        </FieldWrapper>
        <Button disabled={isLoading} type="submit">
          Register
        </Button>
      </Form>
    </>
  );
}