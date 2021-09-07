import clsx from 'clsx'
import React from 'react'
import css from './paragraph.module.scss'

type Props = {
    bold?:boolean,
    italic?:boolean,
    inverted?:boolean,
    uppercase?:boolean,
    customClassNames?: string,
    copy:string,
}

const Paragraph = ({ bold, italic, inverted, uppercase, copy, customClassNames }: Props) => {
  const classes = {
    [css.bold]: bold,
    [css.italic]: italic,
    [css.uppercase]: uppercase,
    [css.inverted]: inverted
  }

  return (
        <p className={clsx(css.paragraph, customClassNames, classes)}>
            {copy}
        </p>
  )
}

export default Paragraph
