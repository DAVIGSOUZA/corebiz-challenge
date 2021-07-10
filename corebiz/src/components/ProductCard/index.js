import React from 'react'
import { ReactComponent as StarSolid } from "../../assets/star-solid.svg";
import { ReactComponent as StarOutlined } from "../../assets/star-outlined.svg";

export default function ProductCard({product}) {
  return (
    <div>
      <div>
        <img src="" alt="produto" />
        {/* {product.listPrice ? <div>offer tag</div> : null} */}
      </div>
      <div>
        <h2>nome produto</h2>
        <p> estrelas </p>
        <p> preço original</p>
        <p> preço </p>
        <p> parcelamento </p>
      </div>
      <button> COMPRAR </button>
    </div>
  )
}
