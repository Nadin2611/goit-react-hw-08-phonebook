import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from 'components/Container.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <title>Contacts</title>

      <ContactForm></ContactForm>
      {isLoading && !error && <b> Request in progress...</b>}
      <Filter></Filter>
      <ContactList></ContactList>
    </Container>
  );
}
