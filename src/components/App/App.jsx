import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import contactList from '../../contactList.json';
import { useState, useEffect } from 'react';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  const [filter, setFilter] = useState('');
  // const [contacts, setContacts] = useState(contactList);
  const key = 'saved-contact';
  const [contacts, setContacts] = useState(() => {
    const savedObject = window.localStorage.getItem(key);
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return contactList;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(contacts));
  }, [contacts]);

  const AddContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const contVisible = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter)
  );

  const deleteContact = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

  return (
    <div className={css.contPhonebook}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={AddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={contVisible} propDelete={deleteContact} />
    </div>
  );
}
