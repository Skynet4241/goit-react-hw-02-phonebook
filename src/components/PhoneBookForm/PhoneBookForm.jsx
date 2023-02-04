import {
  ContactForm,
  ContactFormInput,
  ContactFormBtn,
} from './PhoneBookForm.styled';

export const PhoneBookForm = ({ onSubmitHandler }) => (
  <ContactForm onSubmit={onSubmitHandler}>
    <label htmlFor="name">Name</label>
    <ContactFormInput
      type="text"
      id="name"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    <label htmlFor="number">Number</label>
    <ContactFormInput
      type="tel"
      id="number"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
    <ContactFormBtn>Add contact</ContactFormBtn>
  </ContactForm>
);
