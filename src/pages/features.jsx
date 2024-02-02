import React from 'react'
import CardCarouselContainer from '../components/cardCarousel/cardCarouselContainer'

import FeatureCards from '../components/cards/featureCards'
import aosOptions from '../components/AOS/AOS_Options'

import { featuresList } from './features/featuresList'

let cards = []
for (let i = 0; i < featuresList.length; i++) {
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
    <div
      style={{ minHeight: '85vh', paddingTop: '10vh' }}
      className="d-flex flex-column justify-content-center align-items-center features-container"
    >
      {/* <img className='features-image'/> */}
      <h1 {...aosOptions.fadeDown}>¿Que Puedo hacer con Elite?</h1>
      <div className="cards-container">{cards}</div>
    </div>
  )
}

export default Features