import styled from "styled-components"

export const Card = styled.div`
  width: 200px;
  height: 353px;
  margin-bottom: 32px;
  :hover {
    .data {
      background-color: #e6e8ea;
      transition: 300ms;
    }
    .show-on-hover {
      opacity: 1;
      transition: 300ms;
    }
  }
  @media (max-width: 600px) {
    width: 120px;
    height: 263px;
  } 
`

export const ImgWrapper = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`

export const OfferTag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  div {
    border-bottom: 80px solid transparent;
    border-right: 80px solid #f8475f;
  }
  span {
    position: absolute;
    top: 12px;
    right: 8px;
    font-size: 16px;
    font-weight: 900;
    color: #fff;
  }
  @media (max-width: 600px) {
    div {
      border-bottom: 50px solid transparent;
      border-right: 50px solid #f8475f;
    }
    span {
      top: 8px;
      right: 6px;
      font-size: 10px;
      font-weight: 600;
      color: #fff;
    }
  } 
`

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 300ms;
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 4px 0;
  font-size: 12px;
  font-weight: 600;
  color: #7a7a7a;
  @media (max-width: 600px) {
    font-size: 10px;
    height: 30px;
  } 
`

export const ListPrice = styled.p`
  margin: 0;
  margin-top: 7px;
  height: 14px;
  font-size: 12px;
  text-decoration: line-through;
  color: #7a7a7a;
  @media (max-width: 600px) {
    font-size: 11px;
  } 
`

export const Price = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #000;
  @media (max-width: 600px) {
    font-size: 16px;
  } 
`

export const Installments = styled.p`
  margin: 0;
  margin-bottom: 8px;
  height: 12px;
  font-size: 11px;
  color: #7a7a7a;
`

export const Button = styled.button`
  opacity: 0;
  margin-bottom: 15px;
  width: 120px;
  height: 32px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: #333333;
  }
  @media (max-width: 600px) {
    opacity: 1;
  } 
`