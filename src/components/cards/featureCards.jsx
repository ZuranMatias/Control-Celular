import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function FeatureCards({icon, title, desc}) {
  return (
    <div className='feature-card'>
        <div className='feature-icon'><FontAwesomeIcon size="3x" icon={icon} style={{ margin: '2vw' }} /></div>
        <h3 className='h4'>{title}</h3>
        <h4 className='h5'>{desc}</h4>
    </div>
  )
}

export default FeatureCards
