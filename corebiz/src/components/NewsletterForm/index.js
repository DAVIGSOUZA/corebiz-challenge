import React, { useState } from 'react'
import axios from "axios"
import { emailRegex, BASE_URL } from "../../utils"
import * as S from "./styles"


export default function NewsletterForm () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})
  const [showForm, setShowForm] = useState(true)


  const validateForm = () => {
    const error = { name: '', email: '' }

    name.length > 3 
      ? error.name = ''
      : error.name = 'Preencha com seu nome completo'

    emailRegex.test(email) 
      ? error.email = ''
      : error.email = 'Preencha com um e-mail válido'

    setErrors(error)

    return error.name.length || error.email.length ? true : false
  }

  const submit = (e) => {
    e.preventDefault()

    if (validateForm()) return

    const data = { name, email }

    axios.post(`${BASE_URL}newsletter`, data)
      .then(res => setShowForm(false))
      .catch(err => console.log(err)) 

    setName('')
    setEmail('')
  }
  
  return (
    <S.NewsletterFormContainer>
      {showForm ? (
        <div>
          <S.Title>
            Participe de nossas news com promoções e novidades!
          </S.Title>
          <S.FormWrapper onSubmit={submit}>
            <div>
              <S.FormInput 
                type="text" 
                placeholder="Digite seu nome" 
                onChange={e => setName(e.target.value)}
                error = {false}
              />
              <S.ErrorMessage> {errors.name} </S.ErrorMessage>
            </div>
            <div>
              <S.FormInput 
                type="email" 
                placeholder="Digite seu email" 
                onChange={e => setEmail(e.target.value)}
                error = {false}
              />
              <S.ErrorMessage> {errors.email} </S.ErrorMessage>
            </div>
            <S.Button type="submit">Eu quero!</S.Button>
          </S.FormWrapper>
        </div>
      ) : (
        <S.FeedbackContainer>
          <h3>Seu e-mail foi cadastrado com sucesso!</h3>
          <h4>A partir de agora você receberá as novidades e ofertas exclusivas.</h4>
          <S.Button large onClick={() => setShowForm(true)}>Cadastrar novo e-mail</S.Button>
        </S.FeedbackContainer>        
      )}
    </S.NewsletterFormContainer>
  )
}