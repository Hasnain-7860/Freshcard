import React from 'react'
import Home from '../Home'
import Featured from '../Featured'
import Popular from '../Popular'
import Daily from '../Daily'
import Time from '../Time'

const Frontpage = () => {
  return (
    <div>
        <Home/>
        <Featured/>
        <Popular/>
        <Daily/>
        <Time/>
    </div>
  )
}

export default Frontpage