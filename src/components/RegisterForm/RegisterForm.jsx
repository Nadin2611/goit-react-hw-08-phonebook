import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
  Form,
  FormContainer,
  Label,
  Input,
} from 'components/ContactForm/ContactForm.styled';
import { Container } from 'components/Container.styled';
import { LoginButton } from 'components/LoginForm/LoginForm.styled';

import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
            {t('name')}
            <Input
              type="text"
              name="name"
              minLength={2}
              maxLength={20}
              required
              placeholder="Name"
              title="Username can only contain letters"
              pattern="[a-zA-Zа-яА-ЯІіЇїЄє ]+(([' \-][a-zA-Zа-яА-ЯІіЇїЄє ])?[a-zA-Zа-яА-ЯІіЇїЄє])+$"
            />
          </Label>
        </FormContainer>

        <FormContainer>
          <Label>
            {t('email')}
            <Input
              type="email"
              name="email"
              required
              placeholder="name@gmail.com"
              pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})"
            />
          </Label>
        </FormContainer>

        <FormContainer>
          <Label>
            {t('password')}
            <Input
              type="password"
              name="password"
              required
              placeholder="*******"
              minLength={7}
              title="Minimum 7 characters, including numbers and symbols"
              pattern="/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g"
            />
          </Label>
        </FormContainer>

        <LoginButton type="submit">{t('register2')}</LoginButton>
      </Form>
    </Container>
  );
};
