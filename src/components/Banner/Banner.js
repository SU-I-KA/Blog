import React from 'react'
import Recent from '../Recent/Recent'
import BannerCategories from '../BannerCategories/BannerCategories'

const Banner = () => {
  return (
    <aside className='banner-wrapper'>
      <Recent />
      <BannerCategories />
    </aside>
  )
}

export default Banner
