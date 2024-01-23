import React from 'react'
import aosOptions from '../../AOS/AOS_Options'

import { Button } from 'react-bootstrap'

const imageStyle = { width: '370px', height: '450px', marginRight: '2vw' }

function Slide1() {
  return (
    <div className="carousel-content-container evenly-spaced">
      <img
        className="desktop-only"
        src="./Images/phone_logo.png"
        style={imageStyle}
        {...aosOptions.fadeRightXDelay}
      />

      <div className="carousel-text-container d-flex flex-column justify-content-between">
        <div className="d-flex flex-column justify-content-between">
          <div className='desktop-only'>
            <h1 className="carousel-title" {...aosOptions.fadeUp}> La mejor aplicación para monitorear celulares </h1>
            <p className="carousel-text" {...aosOptions.fadeUpDelay}> ¡Adquiera acceso a distancia a toda la información y acciones en cualquier teléfono! </p>
          </div>
          <div>
            <h1 {...aosOptions.fadeUpXXDelay}>Control Celular</h1>
            <h4 {...aosOptions.fadeUpXXDelay}> SOFTWARE DE MONITOREO DE CONTROL PARENTAL </h4>
          </div>
          <img className="mobile-only" src="./logo_hq.png" 
          style={{ height: '25vh', width: 'auto', marginBottom: '5vh', alignSelf: "center" }} 
          {...aosOptions.fadeUpXXDelay} />
        </div>

        <div
          className="d-flex align-items-center"
          {...aosOptions.fadeUpXXDelay}
        >
          <Button
            variant="primary"
            className="btn-primary"
            style={{ fontSize: 'larger' }}
          >
            ¡Probar Ahora!
          </Button>
          <a
            href=""
            style={{
              marginLeft: '1vw',
              fontSize: 'medium',
              textDecoration: 'none',
              color: '#34d8eb',
            }}
          >
            Demostración
          </a>
        </div>
      </div>
    </div>
  )
}

export default Slide1
