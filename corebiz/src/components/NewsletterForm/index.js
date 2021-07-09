import React from 'react'

export default function NewsletterForm () {
  return (
    <div>
      <div>
        <h3>
          Participe de nossas news com promoções e novidades!
        </h3>
        <form>
          <div>
            <input type="text" placeholder="Digite seu nome"/>
            <span> erro </span>
          </div>
          <div>
            <input type="text" placeholder="Digite seu email"/>
            <span> erro </span>
          </div>
          <button>Eu quero!</button>
        </form>
      </div>
      <div>
        <h3>Seu e-mail foi cadastrado com sucesso!</h3>
        <h4>A partir de agora você receberá as novidades e ofertas exclusivas.</h4>
        <button>Cadastrar novo e-mail</button>
      </div>
    </div>
  )
}
