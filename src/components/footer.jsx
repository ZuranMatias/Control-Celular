import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'


import { whatsappLink } from '../pages/contact/contactUrls'
import { gmailLink } from '../pages/contact/contactUrls'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
      <div className="footer" style={{ maxWidth: '100vw' }}>
        <div className="footer-icons-container">
          <div className="d-flex flex-row justify-content-around mb-3">
            <a href={whatsappLink} ><FontAwesomeIcon icon={faWhatsapp}/></a>
            <a href={gmailLink}><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
