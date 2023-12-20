import {
  Form,
  FormContainer,
  Label,
  Input,
} from 'components/ContactForm/ContactForm.styled';
import { LoginButton } from './LoginForm.styled';

export const LoginForm = () => {
  return (
    <Form>
      <FormContainer>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
      </FormContainer>

      <FormContainer>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
      </FormContainer>

      <LoginButton type="submit">Log In</LoginButton>
    </Form>
  );
};
