import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  const categories = ['technology', 'fashion', 'sports', 'food', 'fun']
  return (
    <ul className='categories'>
      {categories.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/posts/category/${category}`} className='category'>
              {category}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Categories
