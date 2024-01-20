import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './home'

function PageRoutes({children}) {
  return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
        </Routes>
  )
}

export default PageRoutes
