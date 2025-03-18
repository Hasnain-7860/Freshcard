import React from 'react'
import Navbar from './Navbar'
import Home from './Components/Home'
import Featured from './Components/Featured'
import Popular from './Components/Popular'
import Daily from './Components/Daily'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Featured/>
      <Popular/>
      <Daily/>
    </div>
  )
}

export default App