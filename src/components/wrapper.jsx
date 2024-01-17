import React from 'react'
import SectionTitle from './section_title'

function Wrapper({color}) {
  return (
    <div className={`wrapper ${color}`}>
      <div className={`title ${color}`}>{color}</div>
    </div>
  )
}

export default Wrapper
