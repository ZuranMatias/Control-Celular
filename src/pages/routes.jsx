import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './home'
import Contacto from './contact'

function PageRoutes({children}) {
  return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/contacto' element={<Contacto/>}/>
        </Routes>
  )
}

export default PageRoutes
