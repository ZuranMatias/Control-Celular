import React from 'react'
import { HashLink } from 'react-router-hash-link'

const classes = 'd-flex flex-column align-items-center'

function Separator({ color, children, shadowOpacity, scrollTargetUrl, circleless, flat }) {
  var scrollButton
  !color ? (color = 'rgb(255,255,255)') : ' '
  !shadowOpacity ? (shadowOpacity = 0.3) : ' '

  let minimalHeight
  !flat ? minimalHeight = '10vh' : minimalHeight = "0"

  scrollTargetUrl
    ? (scrollButton = (
        //<a href={`#${scrollTargetUrl}`} id="scrollButton">
          <HashLink smooth to={`${scrollTargetUrl}`} id="scrollButton">
            <img src="/icons/down-arrow.png" />
          </HashLink>
        //</a>
      ))
    : ' '

  return (
    <>
      <div className={classes}>
        {!circleless && (<div className="semicircle d-flex justify-content-center align-items-center" style={{ background: color }} >
          {scrollButton}
        </div>)} 
      </div>
      <div className={classes}>
        <div className="semicircle-shadow" style={{ zIndex: '1', textAlign: 'center', backgroundColor: color, width: '100%', }} >
          <div style={{ minHeight: minimalHeight }}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Separator
