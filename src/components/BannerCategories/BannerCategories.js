import React from 'react'

import Categories from '../Categories/Categories'
import Title from '../BannerTitle/BannerTitle'

const BannerCategories = () => {
  return (
    <div className='bannercategories'>
      <Title title='categories'></Title>
      <Categories />
    </div>
  )
}

export default BannerCategories
