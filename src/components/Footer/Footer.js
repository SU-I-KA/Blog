import React from 'react'
import SocialLinks from '../SocialLinks/SocialLinks'

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <SocialLinks styleClass='footer-icons' />
        <p>&copy;{new Date().getFullYear()} Blog. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
