import React, { useContext } from 'react'
import './app.scss'
import { Container, Column, Header } from 'components/blocks'
import AboutMe from 'components/sections/about-me'
import Icons from 'components/sections/icons'
import MyVision from 'components/sections/my-vision'
import Other from 'components/sections/other'
import Work from 'components/sections/work'
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
          <MyVision/>
          <Work/>
        </Column>
        <Column secondary>
          <MyVision rightCol/>
          <Icons/>
          <Other/>
        </Column>
      </Container>
    </Container>
  )
}

export default Home
