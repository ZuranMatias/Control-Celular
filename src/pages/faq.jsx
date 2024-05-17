import React, { useEffect, useState } from 'react'
import Faq from 'react-faq-component'

import aosOptions from '../components/AOS/AOS_Options'

import { questionsList } from './faq/questionsList.jsx'

const data = {
  rows: questionsList,
}

const faqStyles = {
  bgColor: 'none',
  titleTextColor: 'white',
  rowTitleColor: 'white',
  rowContentColor: 'rgba(255,255,255,0.7)',
  arrowColor: 'white',
}

const config = {
  animate: true,
  // arrowIcon: "V",
  // tabFocus: true
}

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="faq-background">
      <div className="faq-text-container" {...aosOptions.fadeUp}>
        <h1>
          <strong>Preguntas Frecuentes</strong>
        </h1>
        <Faq data={data} styles={faqStyles} config={config} />
      </div>
    </div>
  )
}
