import React from 'react'

const classes = 'd-flex flex-column align-items-center'

function Separator({ color, children, shadowOpacity, scrollTargetId }) {
  var scrollButton
  !color ? (color = 'rgb(255,255,255)') : ' '
  !shadowOpacity ? (shadowOpacity = 0.3) : ' '

  scrollTargetId ? (scrollButton = ( <a href={`#${scrollTargetId}`} id="scrollButton"> <img src='/icons/down-arrow.png' /> </a> )) : ' '

  return (
    <>
      <div className={classes}>
        <div className="semicircle d-flex justify-content-center align-items-center" style={{ background: color }} > {scrollButton} </div>
      </div>
      <div className={classes}>
        <div className="semicircle-shadow" style={{ zIndex: '1', textAlign: 'center', backgroundColor: color, width: '100%', }} >
          <div style={{ minHeight: '10vh' }}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Separator
