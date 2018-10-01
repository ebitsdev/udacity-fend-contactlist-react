import React, { Component } from "react";
import { Route } from 'react-router-dom';
import ListContacts from "./ListContacts";
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {

  state = {
      contacts: []
    }
// Create a lifecycle event
componentDidMount(){
  ContactsAPI.getAll().then((contacts) => {
    this.setState({ contacts }) // This sets the values of our contacts state in the app
  })
}
// We use this to remove the contact we are iterating over
  removeContact = (contact) =>{
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
      }));
      ContactsAPI.remove(contact);
  }

  createContact(contact){
    // Go to the ContactsAPI
    ContactsAPI.create(contact).then(contact => {
      this.setState(state => ({
        // Return an object by concatenating the new contact
        contacts: state.contacts.concat([ contact ])
      }))
    })
  }
<<<<<<< HEAD

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts}
          />
        )}/>
        <Route path='/create' render={({ history }) => (
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact)
              history.push('/')
            }}
          />
        )}/>
=======
  render() {
    return (
      <div className='app'>
      <Route exact path='/' render={() => (

      <ListContacts
      onDeleteContact={this.removeContact}
      contacts={this.state.contacts}
      />
      )}/>
      {/* History is a props from React-Router */}
      <Route path='/create' render={( {history }) => (
        <CreateContact
        onCreateContact={(contact) => {
          this.createContact(contact);
          // To go back to the home page after adding the new contact
          history.push('/')
        }}
        />
      )}/>
>>>>>>> contactlist
      </div>
    );
  }
}

export default App;
