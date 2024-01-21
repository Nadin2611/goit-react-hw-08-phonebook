import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { LinkStyled, Text, Title, WrapperBox } from './slyles/Home.styled';

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  const { t } = useTranslation();

  return (
    <WrapperBox>
      <Title>{t('welcome')}</Title>
      <Text>{t('appDescription')}.</Text>
      {!isLoggedIn ? (
        <Text>
          {t('please')} <LinkStyled to="/register">{t('register')}</LinkStyled>{' '}
          {t('or')} <LinkStyled to="/login">{t('logIn')}</LinkStyled>{' '}
          {t('toStartUsingTheApplication')}
        </Text>
      ) : (
        <Text>
          {t('welcomeBack')},{user && user.name}! {t('youAreLoggedIn')} <br />
          {t('exploreYour')}{' '}
          <LinkStyled to="/contacts">{t('phonebook')}</LinkStyled>
        </Text>
      )}
    </WrapperBox>
  );
}
