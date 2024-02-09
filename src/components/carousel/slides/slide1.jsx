import React from 'react'
import aosOptions from '../../AOS/AOS_Options'
import { NavLink } from 'react-router-dom'

import { Button } from 'react-bootstrap'

const imageStyle = { width: '300px', height: '450px', marginLeft: '2vw' }


function Slide1() {
  return (
    <div className="carousel-content-container evenly-spaced">

      <div className="carousel-text-container d-flex flex-column justify-content-between">
        <div className="d-flex flex-column justify-content-between">
          <div className='desktop-only'>
            <h2 className="carousel-title" {...aosOptions.fadeUp}> <strong>LA MEJOR APLICACIÓN DE MONITOREO</strong> </h2>
            <p className="carousel-text" {...aosOptions.fadeUpDelay}> Adquiera acceso a toda la información de cualquier teléfono </p>
          </div>
          <img className="mobile-only" src="./Images/Home/Slides/EliteBox.png" 
          style={{ height: '25vh', width: 'auto', marginBottom: '5vh', alignSelf: "center" }} 
          {...aosOptions.fadeUpXXDelay} />
          
          <div>
            <h1 {...aosOptions.fadeUpXXDelay}>ELITE</h1>
            <h4 {...aosOptions.fadeUpXXDelay}> SOFTWARE DE MONITOREO DE CONTROL PARENTAL </h4>
          </div>
        </div>

        <div className="d-flex align-items-center" {...aosOptions.fadeUpXXDelay} >
          <Button variant="primary" className="btn-primary" style={{ fontSize: 'larger' }} > 
          <NavLink style={{textDecoration: "none", color: "white"}} to={"/pricing"}>Probar Ahora</NavLink>
          </Button>
          <NavLink to={"/features"} style={{ marginLeft: '1vw', fontSize: 'medium', textDecoration: 'none', color: '#34d8eb', }} > Funciones </NavLink>
        </div>
      </div>

      <img
        className="desktop-only"
        src="./Images/Home/Slides/EliteBox.png"
        style={{...imageStyle}}
        {...aosOptions.fadeRightXDelay}
      />
    </div>
  )
}

export default Slide1
