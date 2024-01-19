import React from 'react'
import Navbar from './navbar/navbar/navbar'

import { useInView } from 'react-intersection-observer'

import HeaderCarousel from './carousel/carousel'

function Header() {
  const { ref, inView } = useInView({ threshold: 1 })

  const height = "80vh"
  const upperMargin = "10vh"

  return (
    <div style={{}}>
      <div className="header">
        <div ref={ref}> <Navbar isVisible={inView} /> </div>
          {<HeaderCarousel height={height} upperMargin={upperMargin}/>}
      </div>
    </div>
  )
}

export default Header
