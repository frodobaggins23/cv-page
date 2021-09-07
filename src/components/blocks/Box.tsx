import clsx from 'clsx'
import React, { ReactNode } from 'react'
import css from './box.module.scss'

type Props = {
  children: ReactNode | Array<ReactNode>,
  inverted?: boolean,
  bordered?: boolean,
  leftCol?: boolean,
  rightCol?: boolean,
  desktopOnly?: boolean,
  mobileOnly?: boolean,
}
const Box = ({ children, inverted, bordered, leftCol, rightCol, desktopOnly, mobileOnly }: Props) => {
  const classes = {
    [css.inverted]: inverted,
    [css.bordered]: bordered,
    [css.leftCol]: leftCol,
    [css.rightCol]: rightCol,
    [css.desktopOnly]: desktopOnly,
    [css.mobileOnly]: mobileOnly
  }

  return (
        <div className={clsx(css.container, classes)}>
           {children}
        </div>
  )
}

export default Box
