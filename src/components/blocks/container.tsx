import clsx from 'clsx'
import React, { ReactNode } from 'react'
import l from './layout.module.scss'

type Props = {
    children: ReactNode | Array<ReactNode>,
    column?:boolean,
    page?:boolean,
    customClassNames?:string
}
const Container = ({ children, column, page, customClassNames }: Props) => {
  const classes = {
    [l.columnWrapper]: column,
    [l.container]: page
  }

  return (
        <div className={clsx(classes, customClassNames && customClassNames)}>
            {children}
        </div>
  )
}

export default Container
