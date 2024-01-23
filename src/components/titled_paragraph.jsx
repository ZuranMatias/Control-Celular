import React from 'react'

import aosOptions from './AOS/AOS_Options'

function TitledParagraph({ style, title, children, iconSrc }) {
  var icon
  !title ? title = "Title" : " "
  iconSrc ? icon = <img src={iconSrc} className='section-logo'/> : icon = null
  return (
    <div className="d-flex flex-column section-paragraph" style={{ style }}>
      <div className='d-flex flex-column align-items-center'> 
        <h3 className="section-subtitle" {...aosOptions.fadeUp}> {title} </h3> {icon} 
        </div>
      <h5 {...aosOptions.fadeUpDelay} style={{ marginBottom: '5vh' }}> {children} </h5>
    </div>
  )
}

export default TitledParagraph
