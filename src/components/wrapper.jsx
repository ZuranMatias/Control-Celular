import React from 'react'

function Wrapper({ color, children, title, mobileTitle }) {
  if (!title) {title = "Title"}
  if (!mobileTitle) {mobileTitle = title}
  return (
    <div className={`wrapper ${color}`}>
      <div className={`title ${color} desktop-only`}>{title}</div>
      <div className={`title ${color} mobile-only`}>{mobileTitle}</div>
      <div style={{ width: '80%' }}>
        {children}
      </div>
    </div>
  )
}

export default Wrapper
