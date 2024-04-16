import React from 'react'
import { Helmet } from 'react-helmet'

import { palabrasClaveConcatenadas } from './keywords'

function HelmetComponent() {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <title>Elite Monitorear Teléfonos</title>
      <meta
        name="description"
        content="Ofrecemos Monitoreo de Celulares en Argentina. Nuestro servicio de Control Celular permite monitoreo de whatsapp, llamadas, Redes Sociales, localización por GPS, etc."
      />
      <meta
        name="keywords"
        content={palabrasClaveConcatenadas()}
      />
      <meta name="author" content="Your Name" />
    </Helmet>
  )
}

export default HelmetComponent
