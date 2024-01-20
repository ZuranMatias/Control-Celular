import React from 'react'

import HeaderCarousel from './carousel/carousel'

function Header() {

  const height = "80vh"
  const upperMargin = "10vh"

  return (
    <div style={{}}>
      <div className="header">
          {<HeaderCarousel height={height} upperMargin={upperMargin}/>}
      </div>
    </div>
  )
}

export default Header
