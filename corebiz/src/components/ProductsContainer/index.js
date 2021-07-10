import React, { useEffect } from 'react'
import axios from "axios"
import useGlobalContext from "../../Global";
import { BASE_URL } from "../../utils";
import ProductCard from "../ProductCard"
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg"
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg"

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

  return (
    <div>
      <div>
        <p> Mais vendidos </p>
        <div>divider</div>
      </div> 
      <div>
        <ArrowLeft/>
        <div>
          { products.map(product => <ProductCard product={product} key={product.productId}/>) }
        </div>
        <ArrowRight/>
      </div>
    </div>
  )
}
