import React from 'react'

import ProductPolicyParagraph from './ppParagraph.jsx'
import aosOptions from '../../components/AOS/AOS_Options.js'

import { ppContent } from './ppContent.js'

function PrivacyPolicy() {

  let ppText = []
  ppContent.forEach((element, index) => {
    ppText.push(<ProductPolicyParagraph title={ppContent[index].title}>{ppContent[index].content}</ProductPolicyParagraph>)
  });

  return (
    <>
      {/* <div className='pp-bg-pattern'></div> */}
      <div className="d-flex flex-column align-items-center pp-bg-pattern">
        <h1 {...aosOptions.fadeUp} style={{ marginTop: '15vh' }} className="pp-title" > Política de Privacidad </h1>

        <div className="pp-content">
          {ppText}
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
