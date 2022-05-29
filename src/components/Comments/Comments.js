import React, { useEffect, useState } from 'react'
import styles from './Comments.module.css'

import axios from '../../axios/axios'
import CommentsLoading from '../Loading/CommentsLoading'

import { useParams } from 'react-router-dom'

function Comments() {
  const { id } = useParams()
  const [comments, setComments] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const [editId, setEditId] = useState(null)
  const [editMsg, setEditMsg] = useState('')
  const [user, setUser] = useState('')
  const [msg, setMsg] = useState('')

  const notValidToPost = (user.length > 0) & (msg.length > 0) ? false : true

  const sortCommentsByDate = (a, b) => {
    return new Date(a.date) - new Date(b.date)
  }

  // Fetch comments
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/posts/${id}/comments`)
        setComments(data.sort(sortCommentsByDate))
        setIsPending(false)
      } catch (err) {
        console.error(err)
      }
    }
    getData()
  }, [id])

  // delete a comment
  const deleteComment = async (e, commentId) => {
    // const currentCommentNode =
    //   e.target.parentNode.parentNode.parentNode.parentNode.parentNode
    // currentCommentNode.classList.add('mystyle')
    // console.log(currentCommentNode)
    console.log(e.target)
    try {
      await axios.delete(`/posts/${id}/comments/${commentId}`)
      const newComments = comments.filter((comment) => comment.id !== commentId)
      setComments(newComments.sort(sortCommentsByDate))
    } catch (err) {
      console.log(err)
    }
  }

  // create a new comment
  const handleCreate = async () => {
    try {
      const { data } = await axios.post(`/posts/${id}/comments`, {
        username: user,
        body: msg,
        date: new Date(),
      })
      setComments((oldComments) => {
        if (!oldComments) {
          return data
        } else {
          return [...oldComments, data].sort(sortCommentsByDate)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  // edit a comment
  const editComment = (comment) => {
    setEditId(comment.id)
    setEditMsg(comment.body)
    setEditMode(!editMode)
  }

  // cancel editing
  const handleCancel = () => {
    setEditMsg('')
    setEditId('')
    setEditMode(false)
  }

  // save changes
  const handleSave = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(`/posts/${id}/comments/${editId}`, {
        body: editMsg,
        date: new Date(),
      })
      const tweets = [...comments]
      const commentEdit = tweets.findIndex((comment) => editId === comment.id)
      tweets[commentEdit] = data
      setComments(tweets.sort(sortCommentsByDate))
      setEditMode(false)
      setEditId('')
      setEditMsg('')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCreate()
    setUser('')
    setMsg('')
  }
  return (
    <>
      {/* editing section */}
      {editMode && (
        <div className={styles.modal}>
          <div className={styles.modalbody}>
            <div className={styles.popupHead}>
              <h4 className={styles.popupTitle}>Edit your comment</h4>
              <button
                className={`btn center-btn ${styles.close}`}
                onClick={handleCancel}
              >
                &times;
              </button>
            </div>
            <form>
              <textarea
                className={styles.form__control__popup}
                name='editMsg'
                value={editMsg}
                onChange={(e) => setEditMsg(e.target.value)}
              />
              <div className='btn-flex'>
                <button className='btn center-btn' onClick={handleCancel}>
                  cancel
                </button>
                <button className='btn center-btn' onClick={handleSave}>
                  save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* comments section */}
      <div className={styles.comments__section} id='comments'>
        <div className='wrapper'>
          <div className='row'>
            <div className={`${styles.section__title} text-center`}>
              <h1>Comments</h1>
            </div>
          </div>
          <div className='row'>
            <div className={styles.comment__form}>
              <div className='row'>
                <div className={styles.comment__text}>
                  <h2>Leave us a comment</h2>
                  <p>Describe your experience with us</p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className={styles.col__12}>
                    <input
                      className={styles.form__control}
                      type='text'
                      name='user'
                      value={user}
                      placeholder='Your Name'
                      onChange={(e) => setUser(e.target.value)}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className={styles.col__12}>
                    <textarea
                      className={styles.form__control}
                      name='msg'
                      value={msg}
                      placeholder='Add a comment...'
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                </div>
                <div className='row'>
                  <button
                    className={styles.btn__post}
                    disabled={notValidToPost}
                  >
                    post
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='row'>
            {comments?.length > 0 ? (
              <div className={styles.comments}>
                <div className={styles.comment__title}>recent comments</div>
                {comments?.map?.((comment) => {
                  const { id, username, body } = comment
                  return (
                    <div key={id} className={styles.comment}>
                      <div className='row space-between'>
                        <div className={styles.col__3}>
                          <div className={styles.user__img}>
                            {username?.slice?.(0, 1)}
                          </div>
                        </div>
                        <div className={styles.col__9}>
                          <div className='row space-between'>
                            <div className={styles.user__name}>{username}</div>
                            <div className={styles.comment__btns}>
                              <button
                                className={styles.btn__del}
                                onClick={() => editComment(comment)}
                              >
                                edit
                              </button>
                              <button
                                className={styles.btn__del}
                                onClick={(e) => deleteComment(e, id)}
                              >
                                delete
                              </button>
                            </div>
                          </div>
                          <div className={styles.msg}>{body}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              isPending && <CommentsLoading />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Comments
