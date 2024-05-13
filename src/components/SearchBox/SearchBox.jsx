import { useState } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  return (
    <div className={css.contFilter}>
      <p className={css.textFilter}>Find contacts by name</p>
      <input className={css.inpFilter} type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
}
