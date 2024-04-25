import React from 'react'
import aosOptions from '../../components/AOS/AOS_Options'

function ProductPolicyParagraph({title, children}) {
  return (
    <div {...aosOptions.fadeRight} style={{marginTop: "2rem"}}>
      <h3><b>{title}</b></h3>
      <p className='pp-paragraph' dangerouslySetInnerHTML={{ __html: children }}></p>
    </div>
  )
}

export default ProductPolicyParagraph
