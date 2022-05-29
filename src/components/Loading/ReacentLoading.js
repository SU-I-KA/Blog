import React from 'react'

const ReacentLoading = () => {
  const loop = Array.from(Array(5).keys())
  return (
    <>
      {loop.map((item) => {
        return (
          <div key={item} className='post'>
            <div className='image-container loading-img'>
              <div className='img'></div>
            </div>
            <div>
              <div className='recent-post-title text-line'></div>
              <div className='recent-post-date text-line'></div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ReacentLoading
