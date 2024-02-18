import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

function Slide4() {
  return (
    <div className="carousel-content-container evenly-spaced text-left d-flex flex-column align-items-center justify-content-center" style={{padding: 0}}>
      <h2 className="carousel-title desktop-only">
        {' '}
        <strong> DEMOSTRACIÓN INTERACTIVA </strong>
      </h2>
      <h3
        className=""
        style={{ marginTop: '1rem', textAlign: 'center' }}
      >
        Pruebe una demo offline de la aplicación
        <hr className='desktop-only' style={{ width: '100%', margin: '1vh' }} />
      </h3>
      <h3 className="desktop-only">
        ¡Familiaricese con nuestra app incluso antes de instalarla!
      </h3>

      <div className='d-flex flex-column align-items-center'>
        <img src="Images/Home/Slides/livepanel.png" alt="livepanel" id="livepanel" />
        <a className='h5' href='https://panel.svlogin.com/demo/live-panel.html' target='_blank' style={{color: "lightblue"}}>Probar demo ahora</a>
      </div>

      <p className="carousel-text desktop-only" style={{ textAlign: 'center' }}>
        Demo hecha a modo de demostración. No sirve para espiar celulares
        reales. <br />
        Demo actualmente sólo disponible en inglés.
      </p>
      <p className="carousel-text mobile-only" style={{ textAlign: 'center' }}>
        Demo hecha a modo de demostración.
      </p>
    </div>
  )
}

export default Slide4
