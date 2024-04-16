import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import CarouselContent from './carousel_content'

import Slide1 from './slides/slide1'
import Slide2 from './slides/slide2'
import Slide3 from './slides/slide3'
import Slide4 from './slides/slide4'
import Slide5 from './slides/slide5'
import SlideFreeTrial from './slides/slideFreeTrial'

const gradientOne = { background: 'rgb(0,0,0)', background: 'linear-gradient(146deg, rgba(0,0,0,1) 32%, rgba(122,122,148,1) 100%)', }
const gradientTwo = { background: 'rgb(0,0,0)', background: 'linear-gradient(-146deg, rgba(0,0,50,0.9) 32%, rgba(122,122,148,0.9) 100%)', }

function HeaderCarousel({ height, upperMargin }) {
  return (
    <div className="carousel-height">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        emulateTouch={true}
        showStatus={false}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={30}
        autoPlay={false} //Change Later
        interval={5000}
        stopOnHover={false}
      >
        <CarouselContent backgroundNumber={-1} style={gradientOne} > <Slide1 /> </CarouselContent>
        <CarouselContent backgroundNumber={5}> <SlideFreeTrial /> </CarouselContent>
        <CarouselContent backgroundNumber={7}> <Slide5 /> </CarouselContent>
        <CarouselContent backgroundNumber={1}> <Slide3 /> </CarouselContent>
        <CarouselContent backgroundNumber={-1} style={gradientTwo}> <Slide4 /> </CarouselContent>
        <CarouselContent backgroundNumber={4}> <Slide2 /> </CarouselContent>
      </Carousel>
    </div>
  )
}

export default HeaderCarousel
