import React from 'react'
import aosOptions from '../../AOS/AOS_Options'

import { Button } from 'react-bootstrap'

const imageStyle = {width: "370px", height:"450px", marginRight: "2vw"}

function Slide1() {
  return (
    <div className="carousel-content-container evenly-spaced">

      <img className='desktop-only' src="./Images/phone_logo.png" style={imageStyle} {...aosOptions.fadeRightXDelay}/>

      <div className='carousel-text-container d-flex flex-column justify-content-between'>
        <div>
        <h2 className="carousel-title" {...aosOptions.fadeUp}> La aplicación definitiva para monitorear dispositivos móviles </h2>
        <p className='carousel-text' {...aosOptions.fadeUpDelay}>¡Adquiera acceso a distancia a toda la información y acciones en cualquier teléfono!</p>
        <img className='mobile-only' src='./logo_hq.png' style={{height: "20vh", width: "auto", marginBottom: "10vh"}} {...aosOptions.fadeUpXXDelay}/>
        </div>
        

        <div className='d-flex align-items-center' {...aosOptions.fadeUpXXDelay}>
        <Button variant="primary" className="btn-primary" style={{fontSize: "larger"}}>¡Probar Ahora!</Button>
        <a href="" style={{marginLeft: "1vw", fontSize: "medium", textDecoration: "none", color: "#34d8eb"}}>Demostración</a>
        </div>
      </div>

    </div>
  )
}

export default Slide1
