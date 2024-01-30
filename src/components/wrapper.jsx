import React from 'react'

function Wrapper({ color, children, title, mobileTitle, fontColor, style }) {
  if (!title) {title = "Title"}
  if (!mobileTitle) {mobileTitle = title}
  if (!fontColor) {fontColor = "#000000"}
  return (
    <div className={`wrapper ${color}`} style={{color: fontColor, ...style}}>
      <div className={`title ${color} desktop-only`} style={{color: fontColor, ...style}}>{title}</div>
      <div className={`title ${color} mobile-only`}>{mobileTitle}</div>
      <div style={{ width: '80%' }}>
        {children}
      </div>
    </div>
  )
}

export default Wrapper
