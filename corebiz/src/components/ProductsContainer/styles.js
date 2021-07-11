import styled from "styled-components";

export const ProductsContainer = styled.section`
  width: calc(100% - 20px);
  overflow: hidden;
  margin-left: 20px;

`

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.p`
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 900;
`

export const Divider = styled.div`
  margin-bottom: 16px;
  width: 45px;
  background-color: #C0C0C0;
  border: 3px solid #C0C0C0;
`

export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 400px;
  margin: 0 auto;
  & .slick-dots {
    bottom: 4px;
    & .slick-active {
      button {
        background-color: #f8475f;
      }
    }
    button {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: #bdbdbd;
      ::before {
        content: "";
      }
    }
  }
  @media (max-width: 600px) {
    height: 300px;
  } 
`