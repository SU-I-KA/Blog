import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// import Editor from '../SlateEditor/Editor'

import axios from '../../axios/axios'

import DropDownMenu from '../DropDownMenu/DropDownMenu'

const Form = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [editMode, setEditMode] = useState(false)
  // const [isPending, setIsPending] = useState(true)
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [category, setCategory] = useState('')

  const notValidToPost =
    (title.length > 0) &
    (body.length > 0) &
    (author.length > 0) &
    (imgUrl.length > 0) &
    (category.length > 0)
      ? false
      : true

  // Fetch post data
  useEffect(() => {
    if (id) {
      const getPostData = async () => {
        try {
          const { data } = await axios.get(`/posts/${id}`)
          setAuthor(data.author)
          setTitle(data.title)
          setBody(data.body)
          setImgUrl(data.imgUrl)
          setCategory(data.category)
          setEditMode(true)
          // setIsPending(false)
        } catch (err) {
          console.error(err)
          // setIsPending(false)
        }
      }
      getPostData()
    } else {
      setEditMode(false)
      setAuthor('')
      setTitle('')
      setBody('')
      setImgUrl('')
      setCategory('')
      // setIsPending(false)
    }
  }, [id])

  // cancel editing
  const handleCancel = () => {
    setEditMode(false)
    navigate(`/posts/${id}`)
  }

  // save changes
  const handleSave = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`/posts/${id}`, {
        title,
        author,
        imgUrl,
        category,
        body,
        date: new Date(),
      })
      setEditMode(false)
      navigate(`/posts/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  // create a new post
  const handleCreate = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(`/posts`, {
        title,
        author,
        imgUrl,
        category,
        body,
        date: new Date(),
      })
      setAuthor('')
      setBody('')
      setCategory('')
      setTitle('')
      setImgUrl('')
      navigate(`/posts/${data.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* create post section */}
      <div className='create-post-section'>
        <div className='wrapper'>
          <div className='row'>
            <div className='section-title text-center'>
              <h1>{editMode ? 'Edit Your Post' : 'Create a Post'}</h1>
            </div>
          </div>
          <div className='row'>
            <div className='post-form'>
              <div className='row'>
                <div className='post-text'>
                  <h2>Inspire others</h2>
                  <p>Tell us something about you</p>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className='row'>
                  <div className='col-12'>
                    <input
                      className='post-form-control'
                      type='text'
                      name='title'
                      value={title}
                      placeholder='Title...'
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <input
                      className='post-form-control'
                      type='text'
                      name='author'
                      value={author}
                      placeholder='Your Name...'
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <input
                      className='post-form-control'
                      type='text'
                      name='imgUrl'
                      value={imgUrl}
                      placeholder='Type in url of an image...'
                      onChange={(e) => setImgUrl(e.target.value)}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <DropDownMenu
                      category={category}
                      setCategory={setCategory}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    {/* <Editor /> */}
                    <textarea
                      className='post-form-control'
                      name='body'
                      value={body}
                      placeholder='Content for your post...'
                      onChange={(e) => setBody(e.target.value)}
                    />
                  </div>
                </div>
                <div className='row'>
                  {!editMode ? (
                    <button
                      className='btn-post'
                      disabled={notValidToPost}
                      onClick={handleCreate}
                    >
                      publish
                    </button>
                  ) : (
                    <div className='btn-flex'>
                      <button className='btn center-btn' onClick={handleCancel}>
                        cancel
                      </button>
                      <button className='btn center-btn' onClick={handleSave}>
                        save
                      </button>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form
