import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import Banner from '../../components/Banner/Banner'
import Hero from '../../components/Hero/Hero'
import Comments from '../../components/Comments/Comments'
import SinglePostLoading from '../../components/Loading/SinglePostLoading'

import useFetch from '../../Hooks/useFetch'
import axios from '../../axios/axios'
import { formatDate } from '../../utils/formatDate'

import parse from 'html-react-parser'
import './editor.css'

const SinglePostPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    data: { title, body, imgUrl, date, category },
    isPending,
    error,
  } = useFetch(`/posts/${id}`)

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/posts/${id}`)
      navigate(`/`)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <main>
      <Hero />
      <section className='single-post-wrapper'>
        {error && (
          <article>
            <h3
              style={{
                textAlign: 'center',
                paddingBottom: '60px',
              }}
            >
              {error}
            </h3>
          </article>
        )}
        {isPending ? (
          <SinglePostLoading />
        ) : (
          !error && (
            <article>
              <img src={imgUrl} alt={title} className='main-img' />
              <div className='post-info'>
                <span className='single-post-category'>{category}</span>
                <h2 className='single-post-title'>{title}</h2>
                <p className='single-post-date'>{formatDate(date)}</p>
                <div className='underline'></div>
              </div>
              <div
                className='ck-content'
                style={{
                  marginBottom: '3rem',
                }}
              >
                {parse(body)}
              </div>
              <div className='btn-flex'>
                <Link className='btn center-btn' to={`/posts/edit/${id}`}>
                  edit
                </Link>
                <button
                  className='btn center-btn'
                  onClick={() => handleDelete(id)}
                >
                  delete
                </button>
              </div>
              <Comments />
            </article>
          )
        )}

        {/* banner component */}
        <article>
          <Banner />
        </article>
      </section>
    </main>
  )
}

export default SinglePostPage
