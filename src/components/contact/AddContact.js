import React, { Component } from 'react'

class AddContact extends Component {
     state = {
        name: '',
        email: '',
        phone: ''
    };
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})

  render() {

    const {name, email, phone} = this.state
    return (
      <div className='card mb-3'>
        <div className='card-header'>Add Contacts</div>
        <div className='card-body'>
          <form onSubmit={this.onSubmit}>
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
  }
}

export default AddContact;