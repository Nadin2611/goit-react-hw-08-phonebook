import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Wrapper, UserName } from './UserMenu.styled';
import { LoginOutButton } from 'components/UserMenu/UserMenu.styled';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { ContainerIcon } from 'components/Navigation/Navigation.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user);
  return (
    <Wrapper>
      <UserName>
        <ContainerIcon>
          Welcome, {user && user.name} <AccountCircleOutlinedIcon />
        </ContainerIcon>
      </UserName>
      <LoginOutButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LoginOutButton>
    </Wrapper>
  );
};
