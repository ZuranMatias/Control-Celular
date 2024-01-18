import React from 'react'
import Navbar from './navbar/navbar/navbar'

import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Header() {
  const { ref, inView } = useInView({ threshold: 1 })

  useEffect(() => {
    console.log('Am I in view:', inView)
  }, [inView])

  return (
    <div style={{}}>
      <div className="header">
        <div ref={ref}> <Navbar isVisible={inView} /> </div>
        <div className="content" style={{ paddingTop: '10vh' }}>
          <img src="./home_picture_desktop.png" alt="" />
        </div>
        <div className="background" />
      </div>
    </div>
  )
}

export default Header
