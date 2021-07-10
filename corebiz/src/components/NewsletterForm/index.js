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
          <h3>
            Participe de nossas news com promoções e novidades!
          </h3>
          <S.FormWrapper onSubmit={submit}>
            <div>
              <input 
                type="text" 
                placeholder="Digite seu nome" 
                onChange={e => setName(e.target.value)}
              />
              <span> {errors.name} </span>
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Digite seu email" 
                onChange={e => setEmail(e.target.value)}
              />
              <span> {errors.email} </span>
            </div>
            <button type="submit">Eu quero!</button>
          </S.FormWrapper>
        </div>
      ) : (
        <div>
          <h3>Seu e-mail foi cadastrado com sucesso!</h3>
          <h4>A partir de agora você receberá as novidades e ofertas exclusivas.</h4>
          <button onClick={() => setShowForm(true)}>Cadastrar novo e-mail</button>
        </div>        
      )}
    </S.NewsletterFormContainer>
  )
}