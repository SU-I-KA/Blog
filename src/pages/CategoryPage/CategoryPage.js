import React from 'react'
import { useParams } from 'react-router-dom'

import useFetch from '../../Hooks/useFetch'

import Hero from '../../components/Hero/Hero'
import PostsLoading from '../../components/Loading/PostsLoading'
import Posts from '../../components/Posts/Posts'

const CategoryPage = () => {
  const { category } = useParams()
  const {
    data: posts,
    isPending,
    error,
  } = useFetch(`/posts?category=${category}&sortBy=date&order=desc`)

  return (
    <main>
      <Hero />
      {error && <div>{error}</div>}
      {isPending ? (
        <PostsLoading />
      ) : (
        <Posts posts={posts} title={`category / ${category}`} />
      )}
    </main>
  )
}

export default CategoryPage
