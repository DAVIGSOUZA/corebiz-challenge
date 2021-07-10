import React from 'react'
import Stars from "../Stars";
import * as S from "./styles";

export default function ProductCard({product}) {
  return (
    <S.Card>
      <S.ImgWrapper>
        <img src={product.imageUrl} alt="produto" />
        {product.listPrice ? (
          <S.OfferTag> 
            <div/>
            <span>OFF</span>
          </S.OfferTag>
        ) : null}
      </S.ImgWrapper>
      <div>
        <S.Title>{product.productName}</S.Title>
        <Stars starsReceived={product.stars}/> 
        <p> {product.listPrice}</p>
        <p> {product.price} </p>
        {/* <p> {product.intallments[0]?.quantity} de {product.intallments[0]?.value}</p> */}
      </div>
      <button> COMPRAR </button>
    </S.Card>
  )
}
