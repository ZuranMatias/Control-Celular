import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { Button } from 'react-bootstrap'

function styleIcon(color) {
  return {
    backgroundColor: color,
  }
}
function styleText(color) {
  return {
    backgroundColor: color,
  }
}

export function WhatsappAPIButton() {
  return (
    <div className='contact-button'>
      <a className="d-flex flex-row"
        style={{ textDecoration: 'none' }}
        href="https://api.whatsapp.com/send?phone=5491140401176&amp;text=Hola, me interesa el software ofrecido."
        target="_blank" rel="noopener noreferrer" >
        <Button size="lg" variant="success" className='contact-button-icon' style={{ ...styleIcon('#25D366') }}> <FontAwesomeIcon size="xl" icon={faWhatsapp} /> </Button>
        <Button size="lg" variant="success" className='contact-button-text' style={{ ...styleText('#128C7E') }}> Whatsapp </Button>
      </a>
    </div>
  )
}

export function GmailApiButton() {
  return (
    <div className='contact-button'>
      <a className="d-flex flex-row" style={{ textDecoration: 'none' }}
        href="mailto:linceinvestigacion@gmail.com?Subject=Consulta%20sobre%Aplicación%20Elite"
        target="_top"
      >
        <Button size="lg" variant="success" className='contact-button-icon' style={{ ...styleIcon('#DB4437') }}> <FontAwesomeIcon size="xl" icon={faEnvelope} /> </Button>
        <Button size="lg" variant="success" className='contact-button-text' style={{ ...styleText('#EEEEEE'), color: 'black' }} > Correo </Button>
      </a>
    </div>
  )
}
