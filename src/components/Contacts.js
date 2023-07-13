import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts : [
            {
              id: 1,
              name: 'Nazih Ibrahim',
              email: 'nazihibrahim@info.io',
              phone: '0901-898-2345'
            },
            {
              id: 2,
              name: 'Nicole Udeh',
              email: 'nicoleudeh@gmail.com',
              phone: '0705-491-2040'
            },
            {
              id: 3,
              name: 'Jato Joseph',
              email: 'jatojoseph@yahoomail.com',
              phone: '0900-993-3043'
            },
         ]
        }
  render() {
    const {contacts} = this.state

    return (
      <div>
        {contacts.map((contact) => (<Contact key={contact.id} contact = {contact}/>))}
      </div>
    )
  }
}

export default Contacts