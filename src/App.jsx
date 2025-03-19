import React from 'react'
import Navbar from './Navbar'
import Home from './Components/Home'
import Featured from './Components/Featured'
import Popular from './Components/Popular'
import Daily from './Components/Daily'
import Time from './Components/Time'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Frontpage from './Components/Pages/Frontpage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Frontpage/>}/>
      
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App