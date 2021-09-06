import React, { useContext } from 'react'
import './app.scss'
import Box from 'components/blocks/Box'
import Heading from 'components/typography/Heading'
import Paragraph from 'components/typography/Paragraph'
import { AppContext } from '../context'

const Home = () => {
  const { loading } = useContext(AppContext)

  return (
      <div className="container">
      <Heading copy="Jakub Čejchansss" primary/>
      <Paragraph copy={loading ? 'loading' : 'loaded'}/>
      <Box/>
    </div>
  )
}

export default Home
