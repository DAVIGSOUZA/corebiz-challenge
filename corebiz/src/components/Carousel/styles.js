import styled from "styled-components"

export const CarouselContainer = styled.div`
  width: 100%;
  max-height: 430px;
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
  width: 100vw;
  height: 430px;
  color: #fff;
  background-image: url(${(props) => props.img});
  background-size: cover;
`

export const SlideContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 150px;
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