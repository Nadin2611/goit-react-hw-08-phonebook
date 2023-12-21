import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useAuth } from '../../hooks/useAuth';
import { ContainerIcon, Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <nav>
      <Link to="/">
        <ContainerIcon>
          <HomeOutlinedIcon />
          Home
        </ContainerIcon>
      </Link>

      {isLoggedIn && (
        <Link to="/contacts">
          <ContainerIcon>
            <PhoneIphoneIcon /> Phonebook
          </ContainerIcon>
        </Link>
      )}
    </nav>
  );
};
