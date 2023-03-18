import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './App.module.css';
import ContactForm from './contactForm/contactForm.js';
import Filter from './filter/filter.js';
import ContactList from './contactList/contactList.js';
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

  getRepeatingName = name => {
    return this.state.contacts.find(contact => contact.name === name);
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const repeatingName = this.getRepeatingName(name);
    if (repeatingName) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalazedContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedContact)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const totalQuantity = this.state.contacts.length;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        {totalQuantity !== 0 ? (
          <div className={css.contactsWrapper}>
            <h2>Contacts</h2>
            <p>Total quantity of your contacts: {totalQuantity}</p>
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </div>
        ) : (
          <p>Your contacts will be here</p>
        )}
      </div>
    );
  }
}
