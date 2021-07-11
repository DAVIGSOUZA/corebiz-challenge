import React from 'react'
import Slider from "react-slick"
import Slide from "./Slide"
import { CarouselContainer } from "./styles"


export default function Carousel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <CarouselContainer>
      <Slider {...settings}>
        <Slide/>
        <Slide/>
        <Slide/>
        <Slide/>
      </Slider>
    </CarouselContainer>
  )
}
