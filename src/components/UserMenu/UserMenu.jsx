import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <Wrapper>
      <UserName>
        <ContainerIcon>
          {t('welcome')}, {user && user.name} <AccountCircleOutlinedIcon />
        </ContainerIcon>
      </UserName>
      <LoginOutButton type="button" onClick={() => dispatch(logOut())}>
        {t('logOut')}
      </LoginOutButton>
    </Wrapper>
  );
};
