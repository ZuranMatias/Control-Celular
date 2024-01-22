import React from 'react'

function Wrapper({ color, children, title }) {
  if (!title) {title = "Title"}
  return (
    <div className={`wrapper ${color}`}>
      <div className={`title ${color}`}>{title}</div>
      <div style={{ maxWidth: '80%' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          quibusdam blanditiis minima at atque ipsa earum, placeat eius ex cum!
          Modi, fugiat odit impedit laudantium repellendus obcaecati aperiam ad
          quibusdam!
        </p>
        {children}
      </div>
    </div>
  )
}

export default Wrapper
