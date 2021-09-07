import React, { useContext } from 'react'
import Heading from 'components/typography/Heading'
import Image from 'components/typography/Image'
import Paragraph from 'components/typography/Paragraph'
import { AppContext, AppState } from 'context'
import css from './header.module.scss'
import { Container } from '.'
import AvatarImage from '../../assets/img/photo.jpg'

const Header = () => {
  const { data } = useContext(AppContext) as AppState
  const [headerCopy] = data.intro
  return (
        <Container customClassNames={css.container}>
          <Image src={AvatarImage} alt="Main Photo"/>
          <Container customClassNames={css.name}>
            <Heading copy="Jakub Čejchan" primary/>
            <Paragraph copy={headerCopy.intro} uppercase/>
          </Container>
        </Container>
  )
}

export default Header
