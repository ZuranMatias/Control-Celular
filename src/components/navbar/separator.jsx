import React from 'react'

const classes = 'd-flex flex-column align-items-center'

function Separator({color, children, shadowOpacity}) {
    if (!color) {color = "rgb(255,255,255)"}
    if (!shadowOpacity) {shadowOpacity = 0.3}

    const shadow = `0 20px 20px -20px rgba(0,0,0,${shadowOpacity})`

  return (
    <>
      <div className={classes}>
        <div class="semicircle" style={{background: color}}/>
      </div>
      <div></div>
      <div className={classes}>
        <div style={{ zIndex: '1', textAlign: 'center', backgroundColor: color, width: "100%", boxShadow: shadow}}>
          <div style={{ minHeight: '10vh' }}>{children}</div>
        </div>
      </div>
    </>
  )
}

export default Separator
