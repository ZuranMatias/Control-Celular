import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

//Animation On Scroll Library

function AOSInitializer() {
  return ( useEffect(() => { Aos.init(); /* console.log("Aos initialized") */ }, []) )
}

export default AOSInitializer
