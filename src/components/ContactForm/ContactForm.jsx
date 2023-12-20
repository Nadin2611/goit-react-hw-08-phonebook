import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

import {
  Form,
  FormContainer,
  Label,
  Input,
  AddButton,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [formContact, setFormContact] = useState({ name: '', phone: '' });

  const handleChange = event => {
    const { name, value } = event.target;

    setFormContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isOnContacts = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
        formContact.name.toLowerCase().trim()
    );

    if (isOnContacts) {
      alert(`${formContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(formContact));

    reset();
  };

  const reset = () => {
    setFormContact({ name: '', phone: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormContainer>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={formContact.name}
            onChange={handleChange}
            required
            placeholder="Rosie Simpson"
            pattern="[a-zA-Zа-яА-ЯІіЇїЄє ]+(([' \-][a-zA-Zа-яА-ЯІіЇїЄє ])?[a-zA-Zа-яА-ЯІіЇїЄє])+$"
          ></Input>
        </Label>
      </FormContainer>

      <FormContainer>
        <Label>
          Number
          <Input
            type="tel"
            name="phone"
            value={formContact.phone}
            onChange={handleChange}
            required
            placeholder="459-12-56"
            pattern="\+?[0-9\s\-\(\)]+"
          ></Input>
        </Label>
      </FormContainer>

      <AddButton type="submit">Add Contact</AddButton>
    </Form>
  );
};
