import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import logo from '../../assets/logo.svg'
import Links from '../Links/Links'
import SocialLinks from '../SocialLinks/SocialLinks'

const Navbar = ({ toggle }) => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' className='nav-logo'>
            <img src={logo} alt='mdx logo' />
          </Link>
          <button className='toggle-btn' onClick={toggle}>
            <FaBars></FaBars>
          </button>
        </div>
        <Links styleClass='nav-links' />
        <SocialLinks styleClass='nav-icons' />
      </div>
    </nav>
  )
}

export default Navbar
