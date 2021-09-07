import clsx from 'clsx'
import React from 'react'
import css from './paragraph.module.scss'

type Props = {
    bold?:boolean,
    italic?:boolean,
    inverted?:boolean,
    uppercase?:boolean,
    copy:string,
}

const Paragraph = ({ bold, italic, inverted, uppercase, copy }: Props) => {
  const classes = {
    [css.bold]: bold,
    [css.italic]: italic,
    [css.uppercase]: uppercase,
    [css.inverted]: inverted
  }

  return (
        <p className={clsx(css.paragraph, classes)}>
            {copy}
        </p>
  )
}

export default Paragraph
