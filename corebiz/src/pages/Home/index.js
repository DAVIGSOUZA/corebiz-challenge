import React from 'react'
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import ProductsContainer from "../../components/ProductsContainer";
import NewsletterForm from "../../components/NewsletterForm";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <ProductsContainer/>
      <NewsletterForm/>
      <Footer/>
    </div>
  )
}
