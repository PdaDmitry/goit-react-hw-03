import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import contactList from '../../contactList.json';
import { useState } from 'react';
import css from './App.module.css';

export default function App() {
  const [contacts, setContacts] = useState(contactList);

  const AddContact = newContact => {
    setContacts(prevContacts => {
      [newContact, ...prevContacts];
    });
  };

  return (
    <div className={css.contPhonebook}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={AddContact} />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}
