import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const initialValues = {
    username: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    // console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        handleSubmit;
      }}
    >
      <Form className={css.form}>
        <label className={css.inpName}>Name</label>
        <Field className={css.field} type="text" name="username" />

        <label className={css.inpName}>Number</label>
        <Field className={css.field} type="text" name="number" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
