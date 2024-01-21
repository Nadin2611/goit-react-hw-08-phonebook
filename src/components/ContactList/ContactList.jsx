import { List } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    const isConfirmed = window.confirm(t('deleteContact'));

    if (isConfirmed) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={() => handleDelete(id)}
        >
          {name} {number}
        </ContactListItem>
      ))}
    </List>
  );
};
