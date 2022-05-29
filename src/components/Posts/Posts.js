import React from 'react'
import Post from '../Post/Post'
import Banner from '../Banner/Banner'
const Posts = ({ posts, title }) => {
  if (posts.length === 0) {
    return (
      <section className='posts'>
        <h3 className='posts-title'>'There are no posts yet'</h3>
      </section>
    )
  }
  return (
    <section className='posts'>
      <h3 className='posts-title'>{title}</h3>
      <div className='posts-center'>
        {/* posts column */}
        <article>
          {posts?.map?.((post) => {
            return <Post key={post.id} {...post} />
          })}
        </article>
        {/* banner column */}
        <article>
          <Banner />
        </article>
      </div>
    </section>
  )
}

export default Posts
