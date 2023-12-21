import { useDispatch } from 'react-redux';
import {
  Form,
  FormContainer,
  Label,
  Input,
} from 'components/ContactForm/ContactForm.styled';
import { Container } from 'components/Container.styled';
import { LoginButton } from './LoginForm.styled';
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
    </Container>
  );
};
