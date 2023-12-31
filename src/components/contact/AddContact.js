import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup';
// import {v4 as uuidv4} from 'uuid';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

class AddContact extends Component {
  
  //Contact state 
     state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };
    // On submit function expression
    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        //Destructure
        const {name, email, phone} = this.state

        //Check for Errors
        if (name === '') {
          this.setState({errors: {name: 'Name is required'}})
          return;
        }

        if (email === '') {
          this.setState({errors: {email: 'Email is required'}})
          return;
        }

        if (phone === '') {
          this.setState({errors: {phone: 'Phone is required'}})
          return;
        }

        //Create a contact
        const newContact = {
          // id: uuidv4(),
          name,
          email,
          phone
        }

        //add a new contact
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        dispatch({type: 'ADD_CONTACT', payload: res.data})
  
        //Clear input fields-state
        this.setState({
          name: '',
          email: '',
          phone: '',
          errors: {}
        })

    }
    //Input change
    onChange = (e) => this.setState({[e.target.name]: e.target.value})

  render() {

    const {name, email, phone, errors} = this.state
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className='card mb-3'>
            <div className='card-header'>Add Contacts</div>
            <div className='card-body'>
            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
            <TextInputGroup 
              label = 'Name'
              name = 'name'
              placeholder = 'Enter your name' 
              value = {name}
              onChange = {this.onChange}
              error = {errors.name}
            />
            <TextInputGroup 
              label ='Email'
              name = 'email'
              type = 'email'
              placeholder = 'Enter your email address' 
              value = {email}
              onChange = {this.onChange}
              error = {errors.email}
            />
            <TextInputGroup 
              label = 'Phone Number'
              name = 'phone'
              placeholder = 'Enter your phone number' 
              value = {phone}
              onChange = {this.onChange}
              error = {errors.phone}
            />
            
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