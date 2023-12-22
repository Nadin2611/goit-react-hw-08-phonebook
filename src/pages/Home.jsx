import { useAuth } from '../hooks/useAuth';
import { LinkStyled, Text, Title, WrapperBox } from './slyles/Home.styled';

export default function Home() {
  const { isLoggedIn, user } = useAuth();
  return (
    <WrapperBox>
      <Title>Welcome to the Phonebook</Title>
      <Text>This is a simple application to manage your contacts.</Text>
      {!isLoggedIn ? (
        <Text>
          Please <LinkStyled to="/register">register</LinkStyled> or{' '}
          <LinkStyled to="/login">log in</LinkStyled> to start using the
          application.
        </Text>
      ) : (
        <Text>
          Welcome back, {user && user.name}! You are logged in. <br />
          Explore your <LinkStyled to="/contacts">phonebook</LinkStyled>.
        </Text>
      )}
    </WrapperBox>
  );
}
