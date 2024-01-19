import React from 'react'

function CarouselContent({children, height, backgroundNumber}) {
  if (!backgroundNumber) {backgroundNumber = "1"}
  
  return (
    <div style={{ height: height }}>
        <div className='carousel-content'> {children} </div>
        <div className="carousel-background" style={{backgroundImage: `url(../../public/Images/carousel${backgroundNumber}.png)` }}/>
      </div>
  )
}

export default CarouselContent
