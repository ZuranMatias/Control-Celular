import React from 'react'
import CardCarouselContainer from '../components/cardCarousel/cardCarouselContainer'
import { useEffect } from 'react'

import FeatureCards from '../components/cards/featureCards'
import aosOptions from '../components/AOS/AOS_Options'

import Separator from '../components/separator'

import { featuresList } from './features/featuresList'
import { completeFeaturesList } from './features/completeFeaturesList'

import { gradient2, gradient1 } from './home'
//import Faq from 'react-faq-component'

let features = []
for (let i = 0; i < completeFeaturesList.length; i++) {
  features.push(
    <h5 className="mb-5 grow-on-hover" 
    key={`CompleteFeaturesKey${i}`}
    style={{ textAlign: window.innerWidth <= 737 ? "center" : "left" }}
    {...aosOptions.fadeUp}>

  <strong>{completeFeaturesList[i].title}: </strong>
  {completeFeaturesList[i].description}
</h5>


  )
}

let cards = []
const cardNumber = featuresList.length
for (let i = 0; i < cardNumber; i++) {
  cards.push(
    <div {...aosOptions.fadeUp} key={`cardFeature${i}`}>
      <FeatureCards
        icon={featuresList[i].icon}
        title={featuresList[i].text}
        desc={featuresList[i].desc}
      />
    </div>,
  )
}

function Features() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <div
        style={{ minHeight: '85vh', paddingTop: '10vh' }}
        className="d-flex flex-column justify-content-center align-items-center features-container"
      >
        <h1 {...aosOptions.fadeDown} style={{textAlign: "center"}} >¿Qué Puedo hacer con Elite?</h1>
        <div className="cards-container">{cards}</div>
        <h2 {...aosOptions.fadeDown} style={{textAlign: "center"}} >¡Y mucho más!</h2>
      </div>
      <Separator circleless />
      <section id="demo">
        <div style={gradient1} className="blank-container d-flex flex-column align-items-center justify-content-center">
          <h2 className="h1 mt-5 mb-5" style={{textAlign: "center"}} {...aosOptions.fadeUp}>
            Lista completa de funciones de Elite
          </h2>
          <ul className='d-flex flex-column align-items-center justify-content-center' style={{padding: "0"}}>{features}</ul>
        </div>
      </section>
    </>
  )
}

export default Features
