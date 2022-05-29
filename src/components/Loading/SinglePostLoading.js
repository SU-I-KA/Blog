import React from 'react'
import CommentsLoading from './CommentsLoading'

const SinglePostLoading = () => {
  return (
    <article>
      <div
        className='main-img loading-img'
        style={{
          height: '350px',
        }}
      ></div>
      <div
        className='post-info'
        style={{
          marginBottom: '2rem',
        }}
      >
        <div
          className='single-post-title text-line'
          style={{
            maxWidth: '185px',
            margin: '0px auto',
          }}
        ></div>
        <div
          className='single-post-date text-line'
          style={{
            maxWidth: '185px',
            margin: '1px auto 4px',
          }}
        ></div>

        <div className='underline'></div>
      </div>
      <div
        style={{
          marginBottom: '3rem',
        }}
      >
        <div className='text-line'></div>
        <div className='text-line'></div>
        <div className='text-line'></div>
        <div
          className='text-line'
          style={{
            marginTop: '8px',
          }}
        ></div>
        <div className='text-line'></div>
        <div className='text-line'></div>
      </div>
      <CommentsLoading />
    </article>
  )
}

export default SinglePostLoading
