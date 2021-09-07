import React from 'react'
import css from './image.module.scss'

type Props = {
    src: string,
    alt: string
}

const Image = ({ src, alt }: Props) => {
  return (
        <img className={css.image} src={src} alt={alt}/>
  )
}

export default Image
