import React from 'react'
import Banner from '../../components/Banner/Banner'
import Hero from '../../components/Hero/Hero'
import Form from '../../components/Form/Form'

const CreateNEditPostPage = () => {
  return (
    <main>
      <Hero showPerson={true} />
      <section className='single-post-wrapper'>
        {/* post form */}
        <article>
          <Form />
        </article>
        {/* banner component */}
        <article
          style={{
            marginTop: '3rem',
          }}
        >
          <Banner />
        </article>
      </section>
    </main>
  )
}

export default CreateNEditPostPage
