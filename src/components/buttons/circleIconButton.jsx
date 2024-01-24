import React from 'react'

function CircleIconButton({ children, imgName, caption, style }) {
  return (
    <>
      <div className="icon-container-parent" style={style}>
        <h5 style={{textAlign: "center", marginBottom: "5vh"}}>{caption}</h5>
        <div className="icon-container-circle" style={{marginBottom: "5vh"}}>
          <div className="icon-container-filled-circle">
            <img src={`./icons/${imgName}.png`} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CircleIconButton
