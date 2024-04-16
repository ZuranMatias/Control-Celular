import React from 'react'

function CarouselContent({children, height, backgroundNumber, style, clear}) {
  if (!backgroundNumber) {backgroundNumber = "1"}
  let carouselClass = clear ? "carousel-background-clear" : "carousel-background"
  return (
    <section className='carousel-height' style={style}>
        <div className='carousel-content'> {children} </div>
        {backgroundNumber > 0 && <div className={carouselClass} style={{backgroundImage: `url(./Images/carousel${backgroundNumber}.png)` }}/>}
      </section>
  )
}

export default CarouselContent
