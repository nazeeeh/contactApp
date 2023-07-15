import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
  state = {
    showContactInfo : false
  }

  onDeleteClick = (e) => {
    this.props.deleteClickHandler()
  } 
  
  render() {
    const {name, email, phone} = this.props.contact
    const {showContactInfo} = this.state

    return (
      <div className='card card-body mb-3'>
        <h4>{name} <i onClick={() => {this.setState({showContactInfo : !this.state.showContactInfo})}} 
        className="fa-solid fa-sort-down" style={{cursor: 'pointer'}}></i>
        <i onClick={this.onDeleteClick} className='fas fa-times' style={{cursor: 'pointer', float: 'right', color: 'red'}}></i>
        </h4>
        {showContactInfo ? 
        <ul className='list-group'>
          <li className='list-group-item'>{email}</li>
          <li className='list-group-item'>{phone}</li>
        </ul> : null}
        
      </div>
    )
  }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired


}
export default Contact;




