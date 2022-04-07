import React from 'react'
import Dashboard from './components/home/home'
import Navbar from './components/navbar/navbar'
import Rewards from './components/rewards'
import Triggers from './components/triggers'
import Upload from './components/upload/upload'
import Footer from './components/footer/footer'

import './App.css'

const App = () => {
  return (
    <div className="App">
    <div className="gradient__bg">
    <Navbar />
    </div>
    
    <Dashboard />
    <Upload />
    <Rewards />
    {/* <Triggers /> */}
    {/* <Footer /> */}
    </div>
  )
}

export default App

// login using metamask, admin dashboard , remove and add admins 
// live update of tokens sent