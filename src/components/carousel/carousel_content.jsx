import React from 'react'

function CarouselContent({children, height, backgroundNumber}) {
  if (!backgroundNumber) {backgroundNumber = "1"}
  
  return (
    <div className='carousel-height'>
        <div className='carousel-content'> {children} </div>
        <div className="carousel-background" style={{backgroundImage: `url(./Images/carousel${backgroundNumber}.png)` }}/>
      </div>
  )
}

export default CarouselContent
