import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
      <div className="footer" style={{ maxWidth: '100vw' }}>
        <div className="footer-icons-container">
          <div className="d-flex flex-row justify-content-around mb-3">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>

        <div className="footer-text-container">
          <ul>
            <li> Email:<br/><a href="#">linceincestigacion@gmail.com</a> </li>
            <li> Cel:<br/><a href="#">+54 9 11 4040-1176</a> </li>
            <li> Whatsapp:<br/><a href="#">+54 9 11 4040-1176</a> </li>
            <li> Uruguay 532, Piso 10. CABA.</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
