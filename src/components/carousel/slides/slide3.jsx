import React from 'react'
import aosOptions from '../../AOS/AOS_Options'

const imageStyle = {width: "17rem", height:"30rem", marginRight: "2vw"}

function Slide3() {
  return (
    <div className="carousel-content-container evenly-spaced text-left">
      <div>
        <h2 className="carousel-title"> PROTECCIÓN DE ACOSO INFANTIL </h2>
        <h3 style={{ marginTop: '1rem' }}>
          LEA CONVERSACIONES
          <hr style={{ width: '100%', margin: '1vh' }} />
        </h3>
        <h3>CONTROLE Y REVISE CHATS, FOTOS Y VIDEOS </h3>
        <p className='carousel-text'>Nadie podrá enviar o recibir un mensaje sin que usted lo sepa primero <br />
        Lea conversaciones y revise fotos guardadas cuando quiera.</p>

      </div>

      <img className='desktop-only' src="./Images/grooming.png" style={imageStyle} {...aosOptions.fadeRightXDelay}/>
    </div>
  )
}

export default Slide3
