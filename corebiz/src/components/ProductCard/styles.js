import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  height: 353px;
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
`

export const Title = styled.h2`
  font-size: 12px;
  font-weight: 600;
  color: #7a7a7a;
  /* margin-bottom: 5px; */
`
