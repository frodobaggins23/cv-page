import clsx from 'clsx'
import React from 'react'
import css from './heading.module.scss'

type Props = {
    primary?: boolean,
    secondary?: boolean,
    inverted?:boolean,
    customClassNames?: string,
    copy: string
}

type HeadingProps = {
    children:React.ReactNode
}

const H1 = ({ children, ...props }:HeadingProps) => <h1 {...props} >{children}</h1>
const H3 = ({ children, ...props }:HeadingProps) => <h3 {...props} >{children}</h3>

const extraSpacingLetters = ['Č', 'č']

const Heading = ({ primary, secondary, inverted, copy, customClassNames }: Props) => {
  const copyWords = copy.split(' ')
  const headingProps = {
    className: clsx(
      css.container,
      customClassNames,
      primary && css.primary,
      secondary && css.secondary,
      inverted && css.inverted
    )
  }
  const HeadingComponent = primary ? H1 : H3
  return (
      <HeadingComponent {...headingProps}>
        {copyWords.map(wrd => {
          const needsSpecialSpacing = extraSpacingLetters.includes(wrd[0])
          return (
            <span className={clsx(
              css.heading,
              primary && css.headingPrimary,
              secondary && css.headingSecondary
            )} key={wrd}>
                <span className={clsx(css.headingAccent, needsSpecialSpacing && css.additionalSpacing)}>{wrd[0]}</span>{wrd.slice(1)}{' '}</span>
          )
        })}
    </HeadingComponent>
  )
}

export default Heading
