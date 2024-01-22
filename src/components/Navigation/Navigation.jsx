import { useTranslation } from 'react-i18next';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useAuth } from '../../hooks/useAuth';
import { ContainerIcon, Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();

  return (
    <nav>
      <Link to="/">
        <ContainerIcon>
          <HomeOutlinedIcon />
          {t('home')}
        </ContainerIcon>
      </Link>

      {isLoggedIn && (
        <Link to="/contacts">
          <ContainerIcon>
            <PhoneIphoneIcon /> {t('phonebook1')}
          </ContainerIcon>
        </Link>
      )}
    </nav>
  );
};
