import React, { useEffect, useState } from 'react'
import './app.scss'
import Heading from 'components/typography/Heading'
import Paragraph from 'components/typography/Paragraph'

type State = Record<string, any>

const Home = () => {
  const [state, setState] = useState<State>()
  useEffect(() => {
    fetch('/api/get-copy').then(response => response.json()).then(data => setState(data))
  }, [])
  console.log(state)
  return (
    <div className="container">
      <Heading copy="Jakub Čejchan" primary/>
      <Paragraph copy={state ? state?.intro[0]?.introLong : 'not loaded'}/>
    </div>
  )
}

export default Home
