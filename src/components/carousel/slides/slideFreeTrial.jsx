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

export const whatsappAlertaFreeTrial = async () => {
  Swal.fire({
    title: "<strong style='color: red;'>IMPORTANTE</strong>",
    html: "Para instalar la aplicación, es necesario el acceso <strong>FÍSICO</strong> al celular.</br></br> Para probar nuestro producto, debe tener el dispositivo <strong>DESBLOQUEADO</strong> en su posesión.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Puedo instalar la Aplicación',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = whatsappTrialLink;
    }
  })
}

const getRandomNumber = () => Math.floor(Math.random() * 21) - 10

function picture(url) {
  return (
    <div
      className="grow-on-hover"
      style={{ height: '110%', cursor: 'pointer',  }}
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
      <div className="row-column" style={{ width: '100%', }} onClick={async () => whatsappAlertaFreeTrial()} >
        {picture('./Images/free-trial.png')}
        <div className='free-trial-warning'>
          <h5>Se requiere acceso <strong>FÍSICO</strong> al celular <strong>DESBLOQUEADO</strong></h5>
        </div>
      </div>
    </>
  )
}

export default SlideFreeTrial
