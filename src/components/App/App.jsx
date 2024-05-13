import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import contactList from '../../contactList.json';
import { useState } from 'react';
import css from './App.module.css';

function App() {
  const [state, setState] = useState(contactList);

  return (
    <div className={css.contPhonebook}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={state} />
    </div>
  );
}

export default App;
