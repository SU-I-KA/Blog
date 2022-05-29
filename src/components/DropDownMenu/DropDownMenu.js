import React, { useState } from 'react'
import styles from './DropDownMenu.module.css'

const DropDownMenu = ({ category, setCategory }) => {
  const categories = ['technology', 'fun', 'food', 'fashion', 'sports']
  const [open, setOpen] = useState(false)

  return (
    <div className={`${styles.selectWrap} ${open ? styles.active : null}`}>
      <ul className={styles.defaultOption} onClick={() => setOpen(!open)}>
        <li>
          <div className={styles.option}>
            <input type='radio' name='category' />
            <span>{category || 'Choose a category..'}</span>
          </div>
        </li>
      </ul>

      <ul className={styles.selectUl}>
        {categories?.map?.((item, index) => {
          return (
            <li key={index}>
              <label className={styles.option}>
                <input
                  type='radio'
                  name='category'
                  value={item}
                  onChange={(e) => {
                    setCategory(e.target.value)
                    setOpen(false)
                  }}
                />
                <span>{item}</span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DropDownMenu
