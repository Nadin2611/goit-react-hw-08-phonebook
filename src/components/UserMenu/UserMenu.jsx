import { Wrapper, UserName } from './UserMenu.styled';
import { LoginButton } from 'components/LoginForm/LoginForm.styled';
// import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  //   const { user } = useAuth();
  return (
    <Wrapper>
      <UserName>Welcome, </UserName>
      <LoginButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LoginButton>
    </Wrapper>
  );
};
