import React from 'react'

function CarouselContent({children, height, backgroundNumber, style}) {
  if (!backgroundNumber) {backgroundNumber = "1"}
  
  return (
    <div className='carousel-height' style={style}>
        <div className='carousel-content'> {children} </div>
        {backgroundNumber > 0 && <div className="carousel-background" style={{backgroundImage: `url(./Images/carousel${backgroundNumber}.png)` }}/>}
      </div>
  )
}

export default CarouselContent
