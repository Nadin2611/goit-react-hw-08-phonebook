import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container } from 'components/Container.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';

export const App = ({ contacts }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <ContactForm contacts={contacts}></ContactForm>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <Filter></Filter>
        {isLoading && !error && <b> Request in progress...</b>}
        <ContactList></ContactList>
      </Container>
    </>
  );
};
