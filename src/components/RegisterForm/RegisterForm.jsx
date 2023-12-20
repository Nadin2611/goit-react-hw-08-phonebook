import {
  Form,
  FormContainer,
  Label,
  Input,
} from 'components/ContactForm/ContactForm.styled';
import { LoginButton } from 'components/LoginForm/LoginForm.styled';

export const RegisterForm = () => {
  return (
    <Form>
      <FormContainer>
        <Label>
          Name
          <Input type="text" name="name" />
        </Label>
      </FormContainer>

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
