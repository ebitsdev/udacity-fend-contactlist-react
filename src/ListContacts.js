import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

//When a component has only a render() method, then we can refactor it code to a stateless function like below

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    // Create a method to invoque on value change

    updateQuery = (query) => {
        this.setState({query: query.trim() }) //trim() to remove any extra space
    }

    clearQuery = () => {
        this.setState({ query: ''})
    }
    render(){
        // We can unpack or destructure the contacts, onDeleteContact, and query like below, since they are coming from this.props
        // This process of unpacking is called object destructuring.
        const { contacts, onDeleteContact } = this.props;
        const { query } = this.state;
        let showingContacts;
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i') // 'i' is to ignore case in the regex
            showingContacts = contacts.filter((contact) => match.test(contact.name))
        } else {
            showingContacts = contacts;
        }

        showingContacts.sort(sortBy('name'));
        return (
            <div className='list-contacts'>
            {/* {JSON.stringify(this.state)} */}
            <div className='list-contacts-top'>
            <input className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={query }
            onChange={(event) => this.updateQuery(event.target.value)}
            />
            {/* A Link component will generate an anchor tag */}
            <Link
            to="create"

            className='add-contact'
            >Add Contact</Link>
            </div>
            {showingContacts.length !== contacts.length && (
                <div className='search-contacts'>
                <span>Now showing {showingContacts.length} of { contacts.length} total</span>
                <button onClick={this.clearQuery}>Show all</button>
                </div>
            )}
            <ol className='contact-list'>
            {/* Create a jx component */}
            {showingContacts.map(contact => (
                <li className='contact-list-item' key={contact.id}>
                <div className='contact-avatar' style={{ backgroundImage: `url(${contact.avatarURL})`}}/>
                <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                </div>
                <button onClick={()=> onDeleteContact(contact)} className='contact-remove'>Remove</button>
                </li>
            ))}
            </ol>
        </div>
        );
    }
}

/**
 *
QUESTION 3 OF 3
Before we head into the next Lesson, let's check in on our knowledge of Controlled Components!
Which of the following is true about Controlled Components? Please check all that apply:
Each update to state has an associated handler function
Form elements receive their current value via an attribute
Form input values are generally stored in the component's state
Event handlers for a controlled element update the component's state
 */

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}
export default ListContacts
