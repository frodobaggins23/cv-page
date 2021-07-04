import React from 'react'
import './app.scss'
import Header from 'components/header/'
import logo from '../assets/img/react.png'

const Home = () => {
  return (
    <div className="container">
        <div className="header">
            <Header/>
            <h1><span>J</span>akub <span>Č</span>ejchan</h1>
            <div className="test">Tady je nějaký text v češtině, jestli rozumí třeba řeřiše</div>
            <img src={logo}/>
        </div>
    </div>
  )
}

export default Home
