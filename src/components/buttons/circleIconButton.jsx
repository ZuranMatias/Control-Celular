import React from 'react'

function CircleIconButton({ children, imgName, caption }) {
  return (
    <>
      <div style={{maxWidth: "30%"}} className="d-flex flex-column align-items-center">
        <h5 style={{textAlign: "center", alignSelf: "start"}}>{caption}</h5>
        <div className="icon-container-circle">
          <div className="icon-container-filled-circle">
            <img src={`./icons/${imgName}.png`} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CircleIconButton
