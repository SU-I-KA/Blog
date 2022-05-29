import React from 'react'

import Hero from '../../components/Hero/Hero'
import PostsLoading from '../../components/Loading/PostsLoading'
import Posts from '../../components/Posts/Posts'

import useFetch from '../../Hooks/useFetch'

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch('/posts?page=1&limit=3&sortBy=date&order=desc')

  return (
    <main>
      <Hero showPerson={true} />
      {error && <div>{error}</div>}
      {isPending ? (
        <PostsLoading />
      ) : (
        <Posts posts={blogs} title='recently published' />
      )}
    </main>
  )
}

export default Home
