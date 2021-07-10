import styled from "styled-components";

export const NewsletterFormContainer = styled.section`
  width: 100%;
  height: 150px;
  background-color: #f2f2f2;
  font-family: "Lato", sans-serif;
`

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 16px;
  padding-top: 24px;
  text-align: center;
`

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
`

export const FormInput = styled.input`
  width: 280px;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 17px;
  margin-right: 8px;
  line-height: 14px;
  font-weight: bold;
  border: ${props => props.error ? '1px solid #D7182A' : ''};
  ::placeHolder {
    color: #585858;
  }
`

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #D7182A;
  margin-top: 8px;
`

export const Button = styled.button`
  width: ${props => props.large ? '280px' : '140px'};
  height: 48px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background-color: #333333;
  }
`

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin: 0;
    margin-top: 32px;
    font-size: 14px;
  }
  h4 {
    margin: 0;
    margin-bottom: 15px;
    font-size: 12px;
    font-weight: 400;
    color: #333333;
  }
`


