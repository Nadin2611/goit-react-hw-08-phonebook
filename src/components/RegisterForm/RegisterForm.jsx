import {
  Form,
  FormContainer,
  Label,
  Input,
} from 'components/ContactForm/ContactForm.styled';
import { Container } from 'components/Container.styled';
import { LoginButton } from 'components/LoginForm/LoginForm.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
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

        <LoginButton type="submit">Register</LoginButton>
      </Form>
    </Container>
  );
};
