import React, { useContext, useCallback } from 'react'
import { Box, Container } from 'components/blocks'
import { Heading, Paragraph } from 'components/typography'
import { AppContext, AppState } from 'context'
import { Work as WorkType } from 'context/types'
import css from './work.module.scss'

const WORK_TYPES = {
  MARKETING: 'Marketing Experience',
  CODING: 'Coding Experience'
}

const renderExperience = (experience: WorkType) => {
  const { title, employer, dateFrom, dateTo, description } = experience
  const employerCopy = `${employer} | ${dateFrom} - ${dateTo}`
  return (
              <Container customClassNames={css.container} key={title}>
                  <Paragraph copy={title} bold/>
                  <Paragraph copy={employerCopy} bold customClassNames={css.employer}/>
                  <Paragraph copy={description}/>
              </Container>
  )
}

const Work = () => {
  const { data } = useContext(AppContext) as AppState
  const copy = data.work

  const renderMarketingExperience = useCallback(
    () => {
      const marketingExperience = copy.filter(copy => copy.workType === WORK_TYPES.MARKETING)
      if (marketingExperience) {
        return marketingExperience.map(experience => {
          return renderExperience(experience)
        })
      }
      return []
    },
    [copy]
  )

  const renderCodingExperience = useCallback(
    () => {
      const codingExperience = copy.filter(copy => copy.workType === WORK_TYPES.CODING)
      if (codingExperience) {
        return codingExperience.map(experience => {
          return renderExperience(experience)
        })
      }
      return []
    },
    [copy]
  )

  return (
        <Box bordered leftCol>
            <Heading secondary copy={WORK_TYPES.CODING}/>
            {renderCodingExperience()}
            <Heading secondary copy={WORK_TYPES.MARKETING}/>
            {renderMarketingExperience()}
        </Box>
  )
}

export default Work
