import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import PostsPage from './pages/PostsPage/PostsPage'
import SinglePostPage from './pages/SinglePostPage/SinglePostPage'
import CreateNEditPostPage from './pages/CreateNEditPostPage/CreateNEditPostPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import ScrollIntoView from './components/ScrollIntoView/ScrollIntoView'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Router>
        <ScrollIntoView />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/posts/:id' element={<SinglePostPage />} />
          <Route path='/posts/edit/:id' element={<CreateNEditPostPage />} />
          <Route path='/posts/create' element={<CreateNEditPostPage />} />
          <Route path='/posts/category/:category' element={<CategoryPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
