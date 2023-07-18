import React, { Component } from 'react'
import { Consumer } from '../../context'
import {v4 as uuidv4} from 'uuid';

class AddContact extends Component {
  //Contact state 
     state = {
        name: '',
        email: '',
        phone: ''
    };
    // On submit function expression
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        //Destructure
        const {name, email, phone} = this.state
        //Create a contact
        const newContact = {
          id: uuidv4(),
          name,
          email,
          phone
        }
        //add a new contact
        dispatch({type: 'ADD_CONTACT' , payload: newContact})

        //Clear input fields-state
        this.setState({
          name: '',
          email: '',
          phone: ''
        })
    }
    //Input change
    onChange = (e) => this.setState({[e.target.name]: e.target.value})

  render() {

    const {name, email, phone} = this.state
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className='card mb-3'>
        <div className='card-header'>Add Contacts</div>
        <div className='card-body'>
          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input 
              type='text' 
              name='name'
              value={name}
              className='form-control form-control-lg'
              placeholder='Enter your name...' 
              onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input 
              type='email' 
              name='email'
              value={email}
              className='form-control form-control-lg'
              placeholder='Enter your email...' 
              onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='phone'>Phone Number</label>
              <input 
              type='text' 
              name='phone'
              value={phone}
              className='form-control form-control-lg'
              placeholder='Enter your phone number...'
              onChange={this.onChange} 
              />
            </div>
            <input
            type='submit'
            value='Add Contact'
            className='mt-3 btn btn-block btn-light'
            />
          </form>
        </div>
      </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;