import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import CarouselContent from './carousel_content'

function HeaderCarousel({ height, upperMargin }) {
  if (!height) {
    height = '100%'
  }
  return (
    <Carousel showThumbs={false} infiniteLoop={true} emulateTouch={true} showStatus={false} >
      <CarouselContent height={height} backgroundNumber={1}> <p>primer slide de contenido</p> </CarouselContent>
      <CarouselContent height={height} backgroundNumber={2}> <p>segundo slide de contenido</p> </CarouselContent>
      <CarouselContent height={height} backgroundNumber={3}> <p>tercer slide de contenido</p> </CarouselContent>
    </Carousel>
  )
}

export default HeaderCarousel
