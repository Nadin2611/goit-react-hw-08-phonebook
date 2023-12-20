import { Wrapper, UserName } from './UserMenu.styled';

import { LoginButton } from 'components/LoginForm/LoginForm.styled';

export const UserMenu = () => {
  return (
    <Wrapper>
      <UserName>Welcome, </UserName>
      <LoginButton type="button">Logout</LoginButton>
    </Wrapper>
  );
};
