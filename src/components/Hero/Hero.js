import React from 'react'
import personImg from '../../assets/person.png'

const Hero = ({ showPerson }) => {
  return (
    <header className='hero'>
      {showPerson && (
        <img
          src={personImg}
          placeholder='blurred'
          className='hero-person'
          alt='person typing'
        />
      )}
    </header>
  )
}

export default Hero
