import styled from "styled-components"

export const Footer = styled.footer`
  width: 100vw;
  background-color: #000;
`

export const ContentWrapper = styled.div`
  max-width: 1200px;
  min-height: 213px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  @media (max-width: 600px) {
    flex-direction: column;
  }   
`

export const AddressWrapper = styled.address`
  font-style: normal;
  font-size: 13px;
  line-height: 25px;
`

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;  
`

export const Divider = styled.div`
  width: 45px;
  background-color: #fff;
  border: 2px solid #fff;
`

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 195px;
  height: 38px;
  margin-bottom: 25px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  span {
    margin-left: 8px;
  }
  :hover {
    opacity: 0.9;
  }
`

export const LogosWrapper = styled.div`
  width: 224px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span {
    font-size: 10px;
  }
  @media (max-width: 600px) {
    justify-content: space-between;
    margin-bottom: 16px;
  } 
`