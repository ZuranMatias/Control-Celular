import React from 'react'

import aosOptions from './AOS/AOS_Options'

function TitledParagraph({style, title, children}) {
    if (!title) {title = "Title"}
  return (
    <div className="d-flex flex-column section-paragraph" style={{ style }} >
      <h3 className="section-subtitle" {...aosOptions.fadeUp}>{title}</h3>
      <h5 {...aosOptions.fadeUpDelay} style={{marginBottom: "5vh"}}> {children} </h5>
    </div>
  )
}

export default TitledParagraph
