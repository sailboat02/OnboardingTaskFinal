import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

class ContactPage extends Component { //Main contact page with profiles

  constructor(props) //Creates contacts states
  { super(props)
    this.state = {
      contacts: []
    }
  }

  componentDidMount() { //Sets data from json database into state
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
    this.setState({ contacts: data })
      })
    .catch(console.log)
      }

  render() {
  return (
    <div>
      <center><h1>Contact List</h1></center>
        {this.state.contacts.map((contact) => ( //Maps data through array and displays information
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">{contact.name}</h2>
              <p class="card-text">{contact.company.catchPhrase}</p>
              <Link to={{pathname:`/ContactDetails/:${contact.id}`, state: { data: contact }}}> Contact Details</Link>
            </div>
          </div>
        ))}
    </div>

  );
}
}

export default ContactPage;
