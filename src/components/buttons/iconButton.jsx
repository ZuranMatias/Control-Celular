import React from 'react'
import { NavLink } from 'react-router-dom'

function IconButton({style, type, children}) {
  var image
  var colorClass

  if (!type) {type = "location"}

  switch (type) {
    case "location":
      image = "./icons/alfiler.png"
      colorClass = "orange"
    break;

    case "sound":
      image = "./icons/musica.png"
      colorClass = "lime"
    break;

    case "camera":
      image = "./icons/camara.png"
      colorClass = "blue"
    break;

    case "recording":
      image = "./icons/camara-de-video.png"
      colorClass = "purple"
    break;
  }

  return (
    <NavLink to={"/features"} style={{textDecoration: "none"}} className={"grow-on-hover"}>
    <div className={`icon-button ${colorClass} d-flex`} style={style}>
      <div className="icon-container">
        <img src={image} />
      </div>
      <div className="text-container">
        <h5 style={{padding: "1rem", color: "white"}}>{children}</h5>
      </div>
    </div>
    </NavLink>
  )
}

export default IconButton
