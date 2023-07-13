import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
  onShowClick(){
    console.log('Nazih Wassup')
  }
  
  render() {
    
    const {name, email, phone} = this.props.contact

    return (
      <div className='card card-body mb-3'>
        <h2>{name} <i onClick={this.onShowClick} className="fa-solid fa-sort-down"></i></h2>
        <ul className='list-group'>
          <li className='list-group-item'>{email}</li>
          <li className='list-group-item'>{phone}</li>
        </ul>
      </div>
    )
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,

}
export default Contact;