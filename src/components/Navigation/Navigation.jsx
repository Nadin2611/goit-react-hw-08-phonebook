import { useAuth } from '../../hooks/useAuth';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};
