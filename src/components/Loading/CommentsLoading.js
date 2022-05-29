import React from 'react'
import styles from '../Comments/Comments.module.css'

const CommentsLoading = () => {
  const loop = Array.from(Array(3).keys())
  return (
    <div className={styles.comments}>
      {loop.map?.((item) => {
        return (
          <div key={item} className={styles.comment}>
            <div className='row space-between'>
              <div className={styles.col__3}>
                <div className={`${styles.user__img} loading-img`}></div>
              </div>
              <div className={styles.col__9}>
                <div className='row space-between'>
                  <div className={`${styles.user__name} text-line`}></div>
                  <div className='text-line'></div>
                </div>
                <div className={styles.msg}>
                  <div className='text-line'></div>
                  <div className='text-line'></div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CommentsLoading
