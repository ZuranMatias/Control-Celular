import React, { useEffect, useState } from 'react'
import Faq from 'react-faq-component'

import './css/faq.css'
import aosOptions from '../components/AOS/AOS_Options'

const data = {
  rows: [
    {
      title: '¿Voy a tener algún gasto adicional si uso este software?',
      content: `No. El software utiliza la conexión que tenga el teléfono, pudiendo ser 3G, 4G o WIFI y el consumo que genera es prácticamente imperceptible.`,
    },
    {
      title: '¿Un antivirus puede detectarlo?',
      content: 'No, este software no puede ser detectado por un antivirus.',
    },
    {
      title:
        'Si una persona borra las llamadas o mensajes del teléfono, ¿la información se pierde?',
      content: `La información nunca se pierde porque el sistema la registra instantáneamente cuando se genera. En el caso que el teléfono no tenga Internet en el momento, el programa la almacenará y la enviará al portal cuando se restablezca la conexión. `,
    },
    {
        title: '¿Por cuánto tiempo puedo utilizar este programa para monitorear un celular?',
        content: "La licencia es por 12 meses y se puede renovar por 12 meses más sin necesidad de acceder nuevamente al teléfono."
      },
      {
        title: '¿Puedo Instalar en Android sin root?',
        content: "Sí"
      },
      {
        title: '¿Puedo Instalar en Iphone/IOS?',
        content: "La aplicación sólo se encuentra disponible para dispositivos Android actualmente."
      },
  ],
}

const styles = {
  bgColor: 'none',
  titleTextColor: 'white',
  rowTitleColor: 'white',
  rowContentColor: 'rgba(255,255,255,0.7)',
  arrowColor: 'white',
}

const config = {
  animate: true,
  // arrowIcon: "V",
  // tabFocus: true
}

export default function FAQ() {
  return (
    <div className="faq-background">
      <div className='faq-text-container' {...aosOptions.fadeUp}>
        <h1><strong>Preguntas Frecuentes</strong></h1>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  )
}
