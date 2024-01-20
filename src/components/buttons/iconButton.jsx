import React from 'react'

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
    <div className={`icon-button ${colorClass} d-flex`} style={style}>
      <div className="icon-container">
        <img src={image} />
      </div>
      <div className="text-container">
        <h5 style={{padding: "1rem"}}>{children}</h5>
      </div>
    </div>
  )
}

export default IconButton
