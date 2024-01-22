import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
            {t('email')}
            <Input type="email" name="email" required />
          </Label>
        </FormContainer>

        <FormContainer>
          <Label>
            {t('password')}
            <Input type="password" name="password" required />
          </Label>
        </FormContainer>

        <LoginButton type="submit">{t('logIn1')}</LoginButton>
      </Form>
    </Container>
  );
};
