import React from 'react';

import { whatsappLink } from '../../pages/contact/contactUrls';

function WhatsappStickyButton() {
  return (
    <div className='whatsapp-api-button'>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" >
        <img
          style={{ maxWidth: '100%', height: 'auto' }}
          src="./Images/btn_whatsapp.svg"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
}

export default WhatsappStickyButton;