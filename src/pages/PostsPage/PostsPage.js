import React from 'react'

import Hero from '../../components/Hero/Hero'
import Posts from '../../components/Posts/Posts'
import PostsLoading from '../../components/Loading/PostsLoading'

import useFetch from '../../Hooks/useFetch'

const PostsPage = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('/posts?sortBy=date&order=desc')

  return (
    <main>
      <Hero />
      {error && <div>{error}</div>}
      {isPending ? <PostsLoading /> : <Posts posts={blogs} title='all posts' />}
    </main>
  )
}

export default PostsPage
