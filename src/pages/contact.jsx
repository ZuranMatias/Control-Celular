import React from 'react'

import { WhatsappAPIButton } from '../components/buttons/contactButtons'
import { GmailApiButton } from '../components/buttons/contactButtons'

import Separator from '../components/separator'
import VerticalLine from '../components/dividers/verticalLine'

import { Form, Button } from 'react-bootstrap'

import Swal from 'sweetalert2'

import aosOptions from '../components/AOS/AOS_Options'

function submitted() {
  document.getElementById('formName').value = '';
  document.getElementById('formEmail').value = '';
  document.getElementById('comment').value = '';

  Swal.fire({ title: "Mensaje Enviado!", icon: "success" });
}

function Contacto() {
  return (
    <div className='d-flex flex-column'>
      {/* Header */}
      <header className="d-flex flex-column align-items-center justify-content-center header-contact" style={{ width: '100%', height: '70vh' }} >
        <img className="header-contact-image" />
        <h1 {...aosOptions.fadeUp} >Contacto</h1>
      </header>
      <Separator id="headerSeparator" scrollTargetId={'openingSection'} />
      <div id="openingSection" />

      {/* Titles */}
      <div style={{marginTop: "5vw", textAlign: "center",paddingLeft: "5%",paddingRight: "5%"}}>
      <h2 className='grey-on-hover' {...aosOptions.fadeUp}>¡Conéctate con Nosotros!</h2>
      <h4 className='grey-on-hover' {...aosOptions.fadeUp}>No dudes en ponerte en contacto con nuestro equipo para cualquier pregunta, <br/> comentario o asistencia que requieras.</h4>
      </div>

      {/* Content */}
      <div style={{ alignSelf: "center" }} className="row-column justify-content-center contact-body responsive-padding" >

        <div className="d-flex flex-column align-items-center justify-content-center" >
          <div {...aosOptions.fadeUp}><WhatsappAPIButton /></div>
          <div {...aosOptions.fadeUp}><GmailApiButton /></div>
        </div>
        <VerticalLine/>
        <section>
          <Form action="https://formsubmit.co/zuranmatias@gmail.com" method="POST" target="hiddenFrame" onSubmit={submitted}>

            <Form.Label {...aosOptions.fadeUp}>Nombre</Form.Label>
            <Form.Control {...aosOptions.fadeUp} id='formName' type="text" name="name" style={{marginBottom: "1.5vh"}} required />

            <Form.Label {...aosOptions.fadeUp}>Dirección de Correo</Form.Label>
            <Form.Control {...aosOptions.fadeUp} id='formEmail' type="email" name="email" style={{marginBottom: "1.5vh"}} required />

            <input type="hidden" name="_captcha" value="false"/>

            <Form.Label {...aosOptions.fadeUp}>Mensaje</Form.Label>
            <Form.Control {...aosOptions.fadeUp} style={{resize: "none", marginBottom: "1.5vh"}} as="textarea" rows={3} name="comment" id="comment" required/>

            <Button {...aosOptions.fadeUp} style={{width: "100%"}} type="submit">Enviar</Button>
          </Form>
        </section>
      </div>
      <iframe name="hiddenFrame" style={{display: "none"}}></iframe>
    </div>  
  )
}

export default Contacto
