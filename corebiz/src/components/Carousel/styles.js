import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  height: 430px;
  & .slick-dots {
    bottom: 37px;
    & .slick-active {
      button {
        background-color: #f8475f;
      }
    }
    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #bdbdbd;
      ::before {
        content: "";
      }
    }
  }
`

// slide styles
export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 430px;
  color: #fff;
  img {
    width: 100%;
    height: 430px;
    object-fit: cover;
  }
  div {
    position: absolute;
    top: 35%;
    left: 5%;
  }
`

export const SlideTitle = styled.p `
  margin: 0;
  font-size: 30px;
  font-weight: 700;

`

export const SlideSubtitle = styled.p `
  margin: 0;
  font-size: 45px;
  font-weight: 900;
`