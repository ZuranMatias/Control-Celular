import React from 'react'

const getRandomNumber = () => Math.floor(Math.random() * 21) - 10;

function picture(url) {
  return (
    <div style={{ width: 'auto' }} className="grow-on-hover">
      <img
        className="framed-image fifteen-percent-desktop forty-percent-mobile"
        src={url}
        style={{transform: `rotate(${getRandomNumber()}deg)`}}
      />
    </div>
  )
}

function Slide5() {
  return (
    <div className="d-flex flex-column justify-content-around">
      <div>
        <h1 className="carousel-title"> LAS PERSONAS ENGAÑAN </h1>
        <h2>
          <hr style={{ width: '100%', margin: '1vh', height: '1px' }} />
          PERO NOSOTROS NO
        </h2>
      </div>

      <div className="row-column justify-content-around desktop-only">
        {picture('./Images/Home/Slides/infidelity.jpg')}
        {picture('./Images/Home/Slides/phone-chatting.png')}
        {picture('./Images/Home/Slides/Abduction.jpg')}
      </div>

      <div className='mobile-only'>
        {picture('./Images/Home/Slides/infidelity.jpg')}
      </div>
    </div>
  )
}

export default Slide5
