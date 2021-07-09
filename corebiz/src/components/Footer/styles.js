import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  min-height: 213px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
`

export const AddressWrapper = styled.address`
  font-style: normal;
  font-size: 13px;
  line-height: 25px;
  text-align: start;
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
`