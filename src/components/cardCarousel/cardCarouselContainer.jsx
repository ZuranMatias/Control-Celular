import React, { Component } from 'react'
import ReactCardCarousel from 'react-card-carousel'
import CardCarouselCard from './cardCarouselCard'

//import { faGift, faComputer, faKeyboard, faMessage, faCamera, faPhone } from '@fortawesome/free-solid-svg-icons'
import { featuresList } from '../../pages/features/featuresList'

let cards = []
for (let i = 0; i < featuresList.length; i++) {
  cards.push(<CardCarouselCard key={`feature${i}`} icon={featuresList[i].icon}> {featuresList[i].text} </CardCarouselCard>)
}

function CardCarouselContainer() {
  return (
    <div className="carousel-card-container">
      <ReactCardCarousel autoplay={true} autoplay_speed={3000} spread={'wide'}>
        {cards}
      </ReactCardCarousel>
    </div>
  )
}

export default CardCarouselContainer
