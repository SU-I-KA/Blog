import React from 'react'
import { Link } from 'react-router-dom'

import Title from '../BannerTitle/BannerTitle'
import ReacentLoading from '../Loading/ReacentLoading'

import { formatDate } from '../../utils/formatDate'
import useFetch from '../../Hooks/useFetch'

const Recent = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('/posts?page=1&limit=5&sortBy=date&order=desc')

  return (
    <div className='recent-wrapper'>
      <Title title='recent' />
      {error && <div>{error}</div>}
      {!isPending ? (
        blogs?.map?.((post) => {
          const { title, id, date, imgUrl } = post
          return (
            <Link to={`/posts/${id}`} key={id} className='post'>
              <div className='image-container'>
                <img src={imgUrl} alt={title} className='img' />
              </div>
              <div>
                <h5 className='recent-post-title'>{title}</h5>
                <p className='recent-post-date'>{formatDate(date)}</p>
              </div>
            </Link>
          )
        })
      ) : (
        <ReacentLoading />
      )}
    </div>
  )
}

export default Recent
