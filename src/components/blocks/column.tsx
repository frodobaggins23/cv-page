import clsx from 'clsx'
import React, { ReactNode } from 'react'
import l from './layout.module.scss'

type Props = {
    children: ReactNode | Array<ReactNode>,
    secondary?: boolean
}

const Column = ({ children, secondary }:Props) => {
  const classes = {
    [l.columnSecondary]: secondary
  }
  return (
        <div className={clsx(l.column, classes)}>
            {children}
        </div>
  )
}

export default Column
