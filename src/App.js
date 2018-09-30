import React, { Component } from "react";
import ListContacts from "./ListContacts";
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
  render() {
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
