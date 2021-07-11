import React from 'react'
import Header from "../../components/Header"
import Carousel from "../../components/Carousel"
import ProductsContainer from "../../components/ProductsContainer"
import NewsletterForm from "../../components/NewsletterForm"
import Footer from "../../components/Footer"
import { HomeContainer } from "./styles"

export default function HomePage() {
  return (
    <HomeContainer>
      <div>
        <Header/>
        <Carousel/>
        <ProductsContainer/>
      </div>
      <div>
        <NewsletterForm/>
        <Footer/>
      </div>
    </HomeContainer>
  )
}
