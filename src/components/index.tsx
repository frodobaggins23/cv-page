import React from 'react'
import './app.scss'
import Heading from 'components/typography/Heading'
import Paragraph from 'components/typography/Paragraph'

const Home = () => {
  return (
    <div className="container">
      foos
      <Heading copy="Jakub Čejchan" primary/>
      <Paragraph copy={`I am already pretty confident working with React / Redux 
        but would like to strengthen my backend skills (Express) as well as explore new
        interesting frameworks (e.g. Svelte, Angular)`}/>
    </div>
  )
}

export default Home
