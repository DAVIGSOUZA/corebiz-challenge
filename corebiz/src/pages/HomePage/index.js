import React from 'react'
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ProductCard from "../../components/ProductCard";
import NewsletterForm from "../../components/NewsletterForm";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Banner/>
      <ProductCard/>
      <NewsletterForm/>
      <Footer/>
    </div>
  )
}
