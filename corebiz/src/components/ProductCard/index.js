import React from 'react'
import { ReactComponent as StarSolid } from "../../assets/star-solid.svg";
import { ReactComponent as StarOutlined } from "../../assets/star-outlined.svg";

export default function ProductCard({product}) {
  return (
    <div>
      <div>
        <img src={product.imageUrl} alt="produto" />
        {/* {product.listPrice ? <div>offer tag</div> : null} */}
      </div>
      <div>
        <h2>{product.productName}</h2>
        <p> {product.stars} </p>
        <p> {product.listPrice}</p>
        <p> {product.price} </p>
        {/* <p> {product.intallments[0]?.quantity} de {product.intallments[0]?.value}</p> */}
      </div>
      <button> COMPRAR </button>
    </div>
  )
}
