import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import CarouselContent from './carousel_content'

import Slide1 from './slides/slide1'
import Slide2 from './slides/slide2'
import Slide3 from './slides/slide3'
import Slide4 from './slides/slide4'

function HeaderCarousel({ height, upperMargin }) {
  if (!height) { height = '100%' }
  return (
    <div className="carousel-height">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        showStatus={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={30}
        autoPlay={true}
        interval={5000}
        stopOnHover={false}
      >
        <CarouselContent height={height} backgroundNumber={5}> <Slide1 /></CarouselContent>
        <CarouselContent height={height} backgroundNumber={6}> <Slide4 /></CarouselContent>
        <CarouselContent height={height} backgroundNumber={4}> <Slide2 /></CarouselContent>
        <CarouselContent height={height} backgroundNumber={1}> <Slide3 /></CarouselContent>
      </Carousel>
    </div>
  )
}

export default HeaderCarousel
