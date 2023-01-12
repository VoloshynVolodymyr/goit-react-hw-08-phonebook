import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useLoginMutation } from 'Store/auth/authApi';

import { Button, ErrorMessage, FieldWrapper, Form, Input, Label } from './LoginForm.styled';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { isLoading, isError }] = useLoginMutation();

  const handleFormSubmit = e => {
    e.preventDefault();
    const contact = { email, password };
    login(contact);
  };

  const emailId = nanoid();
  const passwordId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
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
          <Label htmlFor={emailId}>
            Email adress
          </Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            autoComplete="off"
            autoFocus
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
          Sign in
        </Button>
      </Form>
    </>
  );
}