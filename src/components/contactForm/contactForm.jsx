import React from 'react'
import Swal from 'sweetalert2'
import aosOptions from '../AOS/AOS_Options'

const formSubmitEmail = 'https://formsubmit.co/zuranmatias@gmail.com'
async function fetchSubmit() {
  fetch('https://formsubmit.co/ajax/your@email.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: 'FormSubmit',
      message: "I'm from Devro LABS",
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}
function submitted() {
  document.getElementById('formName').value = ''
  document.getElementById('formEmail').value = ''
  document.getElementById('comment').value = ''

  Swal.fire({ title: 'Mensaje Enviado!', icon: 'success' })
}

function ContactForm() {
  return (
    <>
      <form
        action={formSubmitEmail}
        method="POST"
        //onSubmit={submitted}
        className="d-flex flex-column justify-content-around form-container"
        {...aosOptions.fadeDown}
      >
        <div className="d-flex" style={{ marginRight: '0.25rem' }}>
            <div className='d-flex flex-column'>
            <label htmlFor="name">Nombre</label>
            <input  type="text" placeholder="Nombre" name="name" id="formName" className="form-control" required />
            </div>

            <div className="d-flex flex-column" style={{ marginLeft: '0.25rem' }}>
                <label htmlFor="email">Dirección de Correo</label>
                <input type="email" placeholder="correo@hotmail.com" name="email" id="formEmail" className="form-control" required />
            </div>

        </div>

        <div>
        <label htmlFor="message">Mensaje</label>
        <textarea id="comment" className="form-control" name="message" rows="5" style={{ resize: 'none' }} required />
        </div>
        <input type="hidden" name="_captcha" value="false"/>
        <button type="submit" className="btn btn-primary btn-block">Enviar</button>
      </form>
    </>
  )
}

export default ContactForm