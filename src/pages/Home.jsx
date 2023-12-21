import { LinkStyled, Text, Title, WrapperBox } from './slyles/Home.styled';

export default function Home() {
  return (
    <WrapperBox>
      <Title>Welcome to the Phonebook</Title>
      <Text>This is a simple application to manage your contacts.</Text>
      <Text>
        Please <LinkStyled to="/register">register</LinkStyled> or{' '}
        <LinkStyled to="/login">log in</LinkStyled> to start using the
        application.
      </Text>
    </WrapperBox>
  );
}
