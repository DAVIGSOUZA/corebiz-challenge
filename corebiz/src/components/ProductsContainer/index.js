import React, { useEffect } from 'react'
import axios from "axios"
import useGlobalContext from "../../Global";
import { BASE_URL } from "../../utils";
import ProductCard from "../ProductCard"
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg"
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg"

export default function ProductsContainer() {
  const { setProducts } = useGlobalContext()

  useEffect(() => {
    axios.get(`${BASE_URL}products`)
      .then(res => {
        setProducts(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
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
          <ProductCard/>
        </div>
        <ArrowRight/>
      </div>
    </div>
  )
}
