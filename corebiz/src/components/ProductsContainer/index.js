import React from 'react'
import ProductCard from "../ProductCard"
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg"
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg"

export default function ProductsContainer({products}) {

  return (
    <div>
      <div>
        <p> Mais vendidos </p>
        <div>divider</div>
      </div> 
      <div>
        <ArrowLeft/>
        <div>
          <ProductCard/>
        </div>
        <ArrowRight/>
      </div>
    </div>
  )
}
