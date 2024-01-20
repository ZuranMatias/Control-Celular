import React from 'react'
import aosOptions from '../../AOS/AOS_Options'
import IconButton from '../../buttons/iconButton.jsx'

const imageStyle = { width: '370px', height: '450px', marginRight: '2vw' }

function Slide2() {
  return (
    <div className="carousel-content-container evenly-spaced text-center">
      <div>
        <h2 className="carousel-title"> PROTECCIÓN SILENCIOSA </h2>
        <h3 style={{ marginTop: '1rem' }}>
          SEPA TODO LO QUE HAY QUE SABER
          <hr style={{ width: '90%', margin: '1vh' }} />
        </h3>
        <h3> SIN NECESITAR ESTAR AHÍ </h3>
      </div>

      <div style={{marginLeft: "1rem"}} className='d-flex flex-column justify-content-around'>
        <IconButton type={"location"} style={{ marginBottom: '1rem' }}> Ubicación </IconButton>
        <IconButton type={"sound"} style={{ marginBottom: '1rem' }}>Micrófono en Vivo</IconButton>
        <IconButton type={"camera"} style={{ marginBottom: '1rem' }} > Tomar Una Foto </IconButton>
        <IconButton type={"recording"} style={{ marginBottom: '0rem' }} > Grabar Un Video </IconButton>
      </div>
    </div>
  )
}

export default Slide2
