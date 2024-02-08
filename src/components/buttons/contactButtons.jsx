import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { Button } from 'react-bootstrap'

import { whatsappLink } from '../../pages/contact/contactUrls'
import { gmailLink } from '../../pages/contact/contactUrls'

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
        href={whatsappLink}
        target="_blank" rel="noopener noreferrer" >
        <Button size="lg" variant="success" className='contact-button-icon' style={{ ...styleIcon('#25D366') }}> <FontAwesomeIcon size="xl" icon={faWhatsapp} /> </Button>
        <Button size="lg" variant="success" className='contact-button-text' style={{ ...styleText('#128C7E') }}> Whatsapp </Button>
      </a>
    </div>
  )
}

export function GmailApiButton() {
  return (
    <div>
    <label htmlFor="gmailButton" style={{transform: "translate(20px,15px)", fontSize: "15px"}} id='gmailApiButtonLabel'></label>
    <div className='contact-button'>
      <a className="d-flex flex-row" style={{ textDecoration: 'none' }}
        href={gmailLink}
        target="_top"
        onClick={() => {document.getElementById("gmailApiButtonLabel").innerHTML = "<a href='https://mail.google.com/' target='_blank'>linceinvestigacion@gmail.com</a>"}}
        name="gmailButton"
      >
        <Button size="lg" variant="success" className='contact-button-icon' style={{ ...styleIcon('#DB4437') }}> <FontAwesomeIcon size="xl" icon={faEnvelope} /> </Button>
        <Button size="lg" variant="success" className='contact-button-text' style={{ ...styleText('#EEEEEE'), color: 'black' }} > Correo </Button>
      </a>
    </div>
    </div>
  )
}
