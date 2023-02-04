import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Heading, ContactsTitle } from './ContactForm/ContactForm.styled';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  filterHandler = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  getFilterContactsName = () =>
    this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLocaleLowerCase());
    });

  render() {
    return (
      <>
        <div>
          <Heading>Phonebook</Heading>
          <ContactForm onSubmitHandler={this.submitHandler} />
        </div>
        <div>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter
            filter={this.state.filter}
            filterHandler={this.filterHandler}
          />
          <ContactList contacts={this.getFilterContactsName()} />
        </div>
      </>
    );
  }
}
