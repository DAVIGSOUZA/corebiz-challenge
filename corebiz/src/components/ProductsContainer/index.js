import React, { useEffect } from "react"
import axios from "axios"
import useGlobalContext from "../../Global";
import { BASE_URL } from "../../utils";
import ProductCard from "../ProductCard"
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg"
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg"
import Slider from "react-slick"
import * as S from './styles'

export default function ProductsContainer() {
  const { products, setProducts } = useGlobalContext()

  useEffect(() => {
    axios.get(`${BASE_URL}products`)
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])  

  const settings = {
    infinite: true,
    speed: 500,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      }
    ]
  }


  return (
    <S.ProductsContainer>
      <S.ContentWrapper>
        <div>
          <S.Title> Mais vendidos </S.Title>
          <S.Divider/>
        </div> 
        <S.SliderWrapper>
          <Slider {...settings}>
            { products.map(product => {
                return <ProductCard product={product} key={product.productId}/>
              })
            }
          </Slider>
        </S.SliderWrapper>
      </S.ContentWrapper>
    </S.ProductsContainer>
  )
}
