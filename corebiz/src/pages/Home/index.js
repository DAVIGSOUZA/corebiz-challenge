import React from 'react'
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ProductsContainer from "../../components/ProductsContainer";
import NewsletterForm from "../../components/NewsletterForm";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Banner/>
      <ProductsContainer/>
      <NewsletterForm/>
      <Footer/>
    </div>
  )
}
