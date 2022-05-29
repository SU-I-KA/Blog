import React from 'react'

const PostsLoading = () => {
  const loop = Array.from(Array(3).keys())
  return (
    <section className='posts'>
      <div
        className='posts-title text-line'
        style={{
          maxWidth: '185px',
        }}
      ></div>
      <div className='posts-center'>
        <article>
          {loop.map?.((item) => {
            return (
              <article key={item} className='post-wrapper'>
                <div className='img loading-img'></div>
                <div className='info'>
                  <span
                    className='text-line'
                    style={{
                      maxWidth: '185px',
                      display: 'inline-block',
                      marginBottom: '1rem',
                    }}
                  ></span>
                  <div className='post-head text-line'></div>
                  <div className='underline'></div>
                  <div>
                    <div
                      className='text-line'
                      style={{
                        marginBottom: '10px',
                      }}
                    ></div>
                    <div
                      className='text-line'
                      style={{
                        marginBottom: '10px',
                      }}
                    ></div>
                  </div>
                  <div className='text-line link'></div>
                  <footer>
                    <span className='date text-line'></span>
                    <span className='text-line'></span>
                  </footer>
                </div>
              </article>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default PostsLoading
