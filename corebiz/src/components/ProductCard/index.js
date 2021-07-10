import React from 'react'
import Stars from "../Stars";
import { toLocalCurrency } from "../../utils";
import useGlobalContext from "../../Global";
import * as S from "./styles";


export default function ProductCard({product}) {
  const { amount , setAmount } = useGlobalContext()

  let actualAmount = amount

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

      <S.ProductData className="data">
        <S.Title>{product.productName}</S.Title>
        <Stars starsReceived={product.stars}/> 
        <S.ListPrice>
          {product.listPrice? `de ${toLocalCurrency(product.listPrice)}` : ' '}
        </S.ListPrice>
        <S.Price> {`por ${toLocalCurrency(product.price)}`}</S.Price>
        <S.Installments> 
          { 
            product.installments.length > 0
            ? `ou em ${product.installments[0].quantity}
              x de ${toLocalCurrency(product.installments[0].value)} ` 
            : ' '
          }
        </S.Installments>
        <S.Button 
          className="show-on-hover" 
          onClick={() => setAmount(actualAmount++)}
        > 
          COMPRAR 
        </S.Button>
      </S.ProductData>
    </S.Card>
  )
}