import React, { useContext } from 'react'
import { Box } from 'components/blocks'
import { Heading, Paragraph } from 'components/typography'
import { AppContext, AppState } from 'context'

type Props = {
  rightCol?: boolean
}

const MyVision = ({ rightCol }: Props) => {
  const { data } = useContext(AppContext) as AppState
  const [copy] = data.vision
  const boxProps = {
    inverted: true,
    bordered: true,
    rightCol,
    desktopOnly: rightCol,
    mobileOnly: !rightCol
  }
  return (
        <Box {...boxProps}>
            <Heading secondary copy={copy.visionTitle} inverted/>
            <Paragraph copy={copy.visionClaim} bold inverted/>
            <Paragraph copy={copy.visionText} inverted/>
        </Box>
  )
}

export default MyVision
