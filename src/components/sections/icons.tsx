import React, { useContext, useCallback } from 'react'
import { Box, Container } from 'components/blocks'
import { Paragraph } from 'components/typography'
import { AppContext, AppState } from 'context'
import AvatarIcon from '../../assets/img/avatar.svg'
import MailIcon from '../../assets/img/mail.svg'
import PhoneIcon from '../../assets/img/phone.svg'

const ICON_TYPES : Record<string, any> = {
  AVATAR: AvatarIcon,
  MAIL: MailIcon,
  PHONE: PhoneIcon
}

const Icons = () => {
  const { data } = useContext(AppContext) as AppState
  const copy = data.icons

  const renderItems = useCallback(() => {
    return copy.map(item => {
      const icon = ICON_TYPES[item.iconType.toUpperCase()]
      return (
            <Container key={item.iconType}>
              {icon && <img src={icon} alt={item.iconAlt}/>}
              <Paragraph copy = {item.iconText}/>
            </Container>
      )
    })
  }, [copy])

  return (
        <Box>
            {renderItems()}
        </Box>
  )
}

export default Icons
