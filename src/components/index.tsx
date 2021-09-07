import React, { useContext } from 'react'
import './app.scss'
import { Container, Column, Header } from 'components/blocks'
import PlaceholderBox from 'components/blocks/PlaceholderBox'
import AboutMe from 'components/sections/about-me'
import { AppContext, AppState } from 'context'

const Home = () => {
  const { loading } = useContext(AppContext) as AppState

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Container page>
      <Header/>
      <Container column>
        <Column>
          <AboutMe/>
          <PlaceholderBox big/>
          <PlaceholderBox/>
          <PlaceholderBox/>
        </Column>
        <Column secondary>
          <PlaceholderBox/>
          <PlaceholderBox/>
          <PlaceholderBox/>
        </Column>
      </Container>
    </Container>
  )
}

export default Home
