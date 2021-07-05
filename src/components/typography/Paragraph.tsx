import clsx from 'clsx'
import React from 'react'
import css from './paragraph.module.scss'

type Props = {
    bold?:boolean,
    italic?:boolean,
    inverted?:boolean,
    copy:string,
}

const Paragraph = ({ bold, italic, inverted, copy }: Props) => {
  return (
        <p className={clsx(css.paragraph, bold && css.bold, italic && css.italic, inverted && css.inverted)}>
            {copy}
        </p>
  )
}

export default Paragraph
