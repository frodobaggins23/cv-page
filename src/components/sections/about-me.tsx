import React, { useContext } from 'react'
import { Box } from 'components/blocks'
import { Heading, Paragraph } from 'components/typography'
import { AppContext, AppState } from 'context'

const AboutMe = () => {
  const { data } = useContext(AppContext) as AppState
  const [copy] = data.intro
  console.log(copy)
  return (
        <Box>
          <Heading secondary copy="About Me"/>
          <Paragraph copy={copy.introLong} bold/>
        </Box>
  )
}

export default AboutMe
