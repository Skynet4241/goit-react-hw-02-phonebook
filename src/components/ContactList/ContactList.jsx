import { ContactFormList, ContactFormItem } from './ContactList.styled';

export const ContactList = ({ contacts }) => (
  <ContactFormList>
    {contacts.map((contact, id) => (
      <ContactFormItem key={id}>
        {contact.name}: {contact.number}
      </ContactFormItem>
    ))}
  </ContactFormList>
);
