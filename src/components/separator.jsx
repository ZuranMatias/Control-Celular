import React from 'react'

const classes = 'd-flex flex-column align-items-center'

function Separator({color, children, shadowOpacity}) {
    if (!color) {color = "rgb(255,255,255)"}
    if (!shadowOpacity) {shadowOpacity = 0.3}

  return (
    <>
      <div className={classes}>
        <div className="semicircle" style={{background: color}}/>
      </div>
      <div></div>
      <div className={classes}>
        <div className='semicircle-shadow' style={{ zIndex: '1', textAlign: 'center', backgroundColor: color, width: "100%"}}>
          <div style={{ minHeight: '10vh' }}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Separator
