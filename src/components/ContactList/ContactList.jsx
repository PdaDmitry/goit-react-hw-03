import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts }) {
  return (
    <ul className={css.contContList}>
      {contacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
