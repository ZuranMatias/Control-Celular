import React from 'react'
import { whatsappTrialLink } from '../../../pages/contact/contactUrls'
import { redirect, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const alertaFreeTrial = async (cb) => {
  Swal.fire({
    title: '¿Le interesa la promoción de 2 días de licencia gratis?',
    text: 'Podemos redirigirlo a la página de precios para que use esta promo.',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí',
    cancelButtonText: 'No, gracias',
  }).then((result) => {
    if (result.isConfirmed) {
      return pricingRedirect(cb)
    }
  })
}

const pricingRedirect = async (cb) => {
  return cb('/pricing')
}

const getRandomNumber = () => Math.floor(Math.random() * 21) - 10

function picture(url) {
  return (
    <div
      className="grow-on-hover"
      style={{ height: '100%', cursor: 'pointer' }}
    >
      <img
        src={url}
        style={{ transform: `rotate(${getRandomNumber()}deg)` }}
        className="carousel-free-trial-image"
      />
    </div>
  )
}

function SlideFreeTrial() {
  const navigate = useNavigate()
  return (
    <>
      <div
        className="row-column"
        style={{ width: '100%'}}
        onClick={async () => alertaFreeTrial(navigate)}
      >
        {picture('./Images/Home/free-trial.png')}
        <p
          className="h3"
          style={{
            alignSelf: 'center',
            color: 'rgb(255,215,0)',
            textShadow: '5px 5px 5px rgba(0,0,0,0.5)',
            backgroundColor: 'rgba(255,255,255,0)',
            padding: '1rem',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          <strong>
          <span className="mobile-only h5">
              ¡Use nuestra aplicación por dos días
              libres de costo! <br />
              <span style={{ textDecoration: 'underline' }}>
                Es necesario acceso físico al <br />
                celular que se quiera interceptar
              </span>
            </span>
            <span className="desktop-only">
              ¡Use nuestra aplicación por dos días <br />
              libres de costo! <br />
              <br />
              <span style={{ textDecoration: 'underline' }}>
                Es necesario acceso físico al <br />
                celular que se quiera interceptar
              </span>
            </span>
          </strong>
        </p>
      </div>
    </>
  )
}

export default SlideFreeTrial
