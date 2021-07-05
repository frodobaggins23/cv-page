import clsx from 'clsx'
import React from 'react'
import css from './heading.module.scss'

type Props = {
    primary?: boolean,
    secondary?: boolean,
    inverted?:boolean,
    copy: string
}

type HeadingProps = {
    children:React.ReactNode
}

const H1 = ({ children, ...props }:HeadingProps) => <h1 {...props} >{children}</h1>
const H3 = ({ children, ...props }:HeadingProps) => <h3 {...props} >{children}</h3>

const Heading = ({ primary, secondary, inverted, copy }: Props) => {
  const copyWords = copy.split(' ')
  const headingProps = {
    className: clsx(
      css.container,
      primary && css.primary,
      secondary && css.secondary,
      inverted && css.inverted
    )
  }
  const Heading = primary ? H1 : H3
  return (
      <Heading {...headingProps}>
        {copyWords.map(wrd => {
          return (
            <span className={clsx(
              css.heading,
              primary && css.headingPrimary,
              secondary && css.headingSecondary
            )} key={wrd}>
                <span className={css.headingAccent}>{wrd[0]}</span>{wrd.slice(1)}{' '}</span>
          )
        })}
    </Heading>
  )
}

export default Heading
