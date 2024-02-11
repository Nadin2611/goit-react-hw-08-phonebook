import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Header, LanguageSwitch, LanguageContainer } from './AppBar.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { theme } from '../../styles/theme';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(i18n.language);

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
    setActiveLanguage(lang);
  };

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <LanguageContainer>
        <LanguageSwitch
          onClick={() => changeLanguage('en')}
          style={{
            color:
              activeLanguage === 'en'
                ? theme.colors.dark
                : theme.colors.lightGray,
          }}
        >
          En
        </LanguageSwitch>
        <LanguageSwitch
          onClick={() => changeLanguage('uk')}
          style={{
            color:
              activeLanguage === 'uk'
                ? theme.colors.dark
                : theme.colors.lightGray,
          }}
        >
          Ua
        </LanguageSwitch>
      </LanguageContainer>
    </Header>
  );
};
