import React from 'react'
import { ReactComponent as EmailIcon } from "../../assets/icon-email.svg"
import { ReactComponent as PhoneIcon } from "../../assets/icon-phone.svg"
import { ReactComponent as VtexLogo } from "../../assets/vtex-logo.svg"
import { ReactComponent as CorebizLogo } from "../../assets/corebiz-white.svg"

import * as S from "./styles"

export default function Footer() {
  return (
    <S.Footer>
      <S.ContentWrapper>
        
        <S.AddressWrapper>
          <S.Title>Localização</S.Title>
          <S.Divider/>
          <p>
            Avenida Andrômeda, 2000. Bloco 6 e 8 <br/>
            Alphavile SP <br/>
            brasil@corebiz.ag <br/>
            +55 11 3090 1039
          </p>
        </S.AddressWrapper>

        <S.ContactWrapper>

          <a href="https://www.linkedin.com/in/davigsouza" 
            target="_blank" 
            rel="https://corebiz-challenge-mu.vercel.app/"
          >
            <S.FooterButton>
              <EmailIcon/>
              <span>
                ENTRE EM CONTATO
              </span>
            </S.FooterButton>
          </a>

          <a href="https://www.linkedin.com/in/davigsouza" 
            target="_blank" 
            rel="https://corebiz-challenge-mu.vercel.app/"
          >
            <S.FooterButton>
              <PhoneIcon/>
              <span>
                FALE COM O NOSSO <br/> 
                CONSULTOR ONLINE
              </span>
            </S.FooterButton>
          </a>

        </S.ContactWrapper>

        <S.LogosWrapper>
          
          <a href="https://www.corebiz.ag/pt/" 
            target="_blank" 
            rel="https://corebiz-challenge-mu.vercel.app/"
          >
            <div>
              <span>Created by</span>
              <br/>
              <CorebizLogo/>
            </div>
          </a>

          <a href="https://vtex.com/br-pt/" 
            target="_blank" 
            rel="https://corebiz-challenge-mu.vercel.app/"
          >
            <VtexLogo/>
          </a>

        </S.LogosWrapper>

      </S.ContentWrapper>
    </S.Footer>
  )
}
