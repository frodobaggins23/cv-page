import clsx from 'clsx'
import React, { ReactChild } from 'react'
import l from './layout.module.scss'

type Props = {
    children: ReactChild | Array<ReactChild>,
    secondary?: boolean,
}

const Column = ({ children, secondary }:Props) => {
  return (
        <div className={clsx(l.column, secondary && l.columnSecondary)}>
            {children}
        </div>
  )
}

export default Column
