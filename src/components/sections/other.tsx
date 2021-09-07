import React, { useContext, useCallback } from 'react'
import { Box, Container } from 'components/blocks'
import { Heading, Paragraph } from 'components/typography'
import { AppContext, AppState } from 'context'

const Other = () => {
  const { data } = useContext(AppContext) as AppState
  const copy = data.other

  const renderItems = useCallback(() => {
    return copy.map(item => (
      <Container key={item.otherText}>
        <Heading copy={item.otherText} secondary/>
        {item.otherValue1 && <Paragraph copy={item.otherValue1}/>}
        {item.otherValue2 && <Paragraph copy={item.otherValue2}/>}
        {item.otherValue3 && <Paragraph copy={item.otherValue3}/>}
      </Container>
    ))
  }, [copy])

  return (
        <Box bordered rightCol>
            {renderItems()}
        </Box>
  )
}

export default Other
