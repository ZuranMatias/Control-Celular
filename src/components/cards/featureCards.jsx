import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function FeatureCards({icon, title, desc}) {
  return (
    <div className='feature-card'>
        <div className='feature-icon'><FontAwesomeIcon size="3x" icon={icon} style={{ margin: '2vw' }} /></div>
        <h4>{title}</h4>
        <h5>{desc}</h5>
    </div>
  )
}

export default FeatureCards
