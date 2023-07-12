import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
    const { branding } = props
    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-2'>
            <div className='container'>
                <a href='/' className='navbar-brand'>
                  {branding}  
                </a>
                <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                <a href='/' className='nav-link'>Home</a>
                </li>
                <li className='nav-item'>
                <a href='/' className='nav-link'>About</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    branding : 'My Application'
}

Header.propTypes = {
    branding : PropTypes.string.isRequired
}


export default Header;