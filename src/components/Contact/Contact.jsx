import css from './Contact.module.css';

export default function Contact({ data: { id, name, number } }) {
  return (
    <div className={css.contContact}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}