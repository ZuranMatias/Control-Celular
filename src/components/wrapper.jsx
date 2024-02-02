import React from 'react'

function Wrapper({ color, children, title, mobileTitle, fontColor, style }) {
  if (!title) {title = "Title"}
  if (!mobileTitle) {mobileTitle = title}
  
  return (
    <div className={`wrapper ${color}`} style={{color: fontColor, ...style}}>
      <div className={`title desktop-only`} style={{color: fontColor, ...style}}>{title}</div>
      <div className={`title mobile-only`}>{mobileTitle}</div>
      <div style={{ width: '80%' }}>
        {children}
      </div>
    </div>
  )
}

export default Wrapper
