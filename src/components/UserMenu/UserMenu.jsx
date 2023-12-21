import { Wrapper, UserName } from './UserMenu.styled';
import { LoginOutButton } from 'components/UserMenu/UserMenu.styled';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user);
  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <LoginOutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LoginOutButton>
    </Wrapper>
  );
};
