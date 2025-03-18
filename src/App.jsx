import React from 'react'
import Navbar from './Navbar'
import Home from './Components/Home'
import Featured from './Components/Featured'
import Popular from './Components/Popular'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Featured/>
      <Popular/>
    </div>
  )
}

export default App