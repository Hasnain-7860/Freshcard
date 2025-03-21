import React from 'react'
import Navbar from './Navbar'
import Home from './Components/Home'
import Featured from './Components/Featured'
import Popular from './Components/Popular'
import Daily from './Components/Daily'
import Time from './Components/Time'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Frontpage from './Components/Pages/Frontpage'
import Footer from './Components/Footer'
import Deshboard from './Components/Deshboard'
import Pages from './Components/Pages'
import Docs from './Components/Docs'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/Home' element={<Frontpage/>}/>
      <Route path='/Featured' element={<Featured/>}/>
      <Route path='/Popular' element={<Popular/>}/>
      <Route path='/Account' element={<Deshboard/>} />
      <Route path='/Pages' element={<Pages/>}  />
      <Route path='/Doc' element={<Docs/>} />
      
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App