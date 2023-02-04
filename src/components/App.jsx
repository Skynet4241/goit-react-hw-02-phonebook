import { Component } from 'react';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Heading } from './PhoneBookForm/PhoneBookForm.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  submitHandler = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;

    this.setState(({ contacts }) => {
      const id = nanoid();

      const newContact = {
        id,
        name: name.value,
        number: number.value,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  render() {
    return (
      <>
        <Heading>Phonebook</Heading>
        <PhoneBookForm onSubmitHandler={this.submitHandler} />
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}