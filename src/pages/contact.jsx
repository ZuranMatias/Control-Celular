import React from 'react'
import { useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'

import { WhatsappAPIButton } from '../components/buttons/contactButtons'
import { GmailApiButton } from '../components/buttons/contactButtons'

import Separator from '../components/separator'
import VerticalLine from '../components/dividers/verticalLine'

import ContactForm from '../components/contactForm/contactForm'

import aosOptions from '../components/AOS/AOS_Options'

const whatsappLink = "whatsapp://send?text=Tu mensaje!&phone=573"

function Contacto() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="d-flex flex-column">
      {/* Header */}
      <header
        className="d-flex flex-column align-items-center justify-content-center header-contact"
        style={{ width: '100%', height: '70vh' }}
      >
        <img className="header-contact-image" />
        <h1 {...aosOptions.fadeUp}>Contacto</h1>
      </header>
      <Separator id="headerSeparator" scrollTargetUrl={'/contacto#openingSection'} />
      <div id="openingSection" />

      {/* Titles */}
      <div
        style={{
          marginTop: '5vw',
          textAlign: 'center',
          paddingLeft: '5%',
          paddingRight: '5%',
        }}
      >
        <h2 className="grey-on-hover" {...aosOptions.fadeUp}>
          ¡Conéctate con Nosotros!
        </h2>
        <h4 className="grey-on-hover" {...aosOptions.fadeUp}>
          No dudes en ponerte en contacto con nuestro equipo para cualquier
          pregunta, <br /> comentario o asistencia que requieras.
        </h4>
      </div>

      {/* Content */}
      <div
        style={{ alignSelf: 'center' }}
        className="row-column justify-content-center contact-body responsive-padding"
      >
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div {...aosOptions.fadeUp}>
            <WhatsappAPIButton />
          </div>
          <div {...aosOptions.fadeUp}>
            <GmailApiButton />
          </div>
        </div>
        <VerticalLine className={'desktop-only'} />
        <section>
          <ContactForm/>
        </section>
      </div>
      <iframe name="hiddenFrame" style={{ display: 'none' }}></iframe>
    </div>
  )
}

export default Contacto
