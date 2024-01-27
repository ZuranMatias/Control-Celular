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
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
