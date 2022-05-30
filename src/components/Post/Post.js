import React from 'react'

import { FaRegClock } from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

import { formatDate } from '../../utils/formatDate'
import { excerpt } from '../../utils/excerpt'

const Post = (props) => {
  const { title, imgUrl, id, date, category, body, author } = props
  return (
    <article className='post-wrapper'>
      <img src={imgUrl} alt={title} className='img' />
      <div className='info'>
        <span className='category'>{category}</span>
        <h3 className='post-head'>{title}</h3>
        <div className='underline'></div>
        <p>{`${excerpt(body)} ... `}</p>
        <Link to={`/posts/${id}`} className='link'>
          Continue Reading <IoMdArrowRoundForward />
        </Link>
        <footer>
          <span className='date'>
            <FaRegClock className='icon' />
            {formatDate(date)}
          </span>
          <span>By {author}</span>
        </footer>
      </div>
    </article>
  )
}

export default Post
