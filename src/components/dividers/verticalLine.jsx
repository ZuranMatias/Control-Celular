import React from 'react'
import aosOptions from '../AOS/AOS_Options'

const CSS = {
  borderLeft: '1px solid rgba(50,50,200,0.8)',
  height: '300px',
  width: '0px',
  marginLeft: '-3px',
  //top: '0',
  borderWidth: ' 0 1px',
  boxShadow: "2px 3px 3px 1px rgb(0 0 0 / 20%)",
  alignSelf: "center",
  marginLeft: "5vw",
  marginRight: "5vw",
}

function VerticalLine({className}) {
  return (
    <>
      <div style={{ ...CSS}} {...aosOptions.fadeDown} className={className}></div>
    </>
  )
}

export default VerticalLine
