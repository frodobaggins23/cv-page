import React from 'react'
import css from './header.module.scss'

const Header = () => {
  return (
        <div>
            Header
            <div className={css.test}>I am using <span>CSS modules</span></div>
        </div>
  )
}

export default Header
