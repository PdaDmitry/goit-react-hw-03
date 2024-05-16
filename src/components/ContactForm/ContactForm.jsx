import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';

export default function ContactForm({ onAdd }) {
  const userId = useId();
  const numberId = useId();

  const initState = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initState} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.contInput}>
          <label className={css.inpName} htmlFor={userId}>
            Username
          </label>
          <Field className={css.field} type="text" id={userId} name="name" />
        </div>

        <div className={css.contInput}>
          <label className={css.inpName} htmlFor={numberId}>
            Number
          </label>
          <Field className={css.field} type="text" id={numberId} name="number" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
