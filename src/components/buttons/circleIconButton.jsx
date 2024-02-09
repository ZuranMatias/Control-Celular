import React from 'react'
import { NavLink } from 'react-router-dom'

function CircleIconButton({ children, imgName, caption, style }) {
  return (
    <>
    
      <div className="icon-container-parent" style={style}>
        <h5 style={{textAlign: "center", marginBottom: "5vh"}}>{caption}</h5>
        <NavLink to={"/pricing"}>
        <div className="icon-container-circle" style={{marginBottom: "5vh"}}>
          <div className="icon-container-filled-circle">
            <img src={`./icons/${imgName}.png`} />
          </div>
        </div>
        </NavLink>
      </div>
    </>
  )
}

export default CircleIconButton
