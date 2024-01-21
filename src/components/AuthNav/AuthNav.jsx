import { useTranslation } from 'react-i18next';
import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Link to="/register">{t('register1')}</Link>
      <Link to="/login">{t('logIn1')}</Link>
    </div>
  );
};
