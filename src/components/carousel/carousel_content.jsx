import React from 'react'

function CarouselContent({children, height}) {
  return (
    <div style={{ height: height }}>
        <div className='carousel-content'>
          {children}
        </div>
        <div className="background" style={{}}/>
      </div>
  )
}

export default CarouselContent
