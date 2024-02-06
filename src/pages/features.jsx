import React from 'react'
import CardCarouselContainer from '../components/cardCarousel/cardCarouselContainer'

import FeatureCards from '../components/cards/featureCards'
import aosOptions from '../components/AOS/AOS_Options'

import { featuresList } from './features/featuresList'

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
  return (
    <>
      <div
        style={{ minHeight: '85vh', paddingTop: '10vh' }}
        className="d-flex flex-column justify-content-center align-items-center features-container"
      >
        {/* <img className='features-image'/> */}
        <h1 {...aosOptions.fadeDown}>¿Qué Puedo hacer con Elite?</h1>
        <div className="cards-container">{cards}</div>
        <h2 {...aosOptions.fadeDown}>¡Y mucho más!</h2>
      </div>
    </>
  )
}

export default Features
