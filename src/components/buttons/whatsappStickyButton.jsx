import React from 'react';

function WhatsappStickyButton() {
  return (
    <div className='whatsapp-api-button'>
      <a href="https://api.whatsapp.com/send?phone=5491140401176&amp;text=Hola, me interesa el software ofrecido." target="_blank" rel="noopener noreferrer" >
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