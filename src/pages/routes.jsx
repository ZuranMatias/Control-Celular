import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import Home from './home'
import Contacto from './contact'
import FAQ from './faq'
import Features from './features'

function PageRoutes({children}) {
  return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/contacto' element={<Contacto/>}/>
            <Route exact path='/faq' element={<FAQ/>}/>
            <Route exact path='/features' element={<Features/>}/>
        </Routes>
  )
}

export default PageRoutes
