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
          <S.FooterButton>
            <EmailIcon/>
            <span>
              ENTRE EM CONTATO
            </span>
          </S.FooterButton>
          <S.FooterButton>
            <PhoneIcon/>
            <span>
              FALE COM O NOSSO <br/> 
              CONSULTOR ONLINE
            </span>
          </S.FooterButton>
        </S.ContactWrapper>

        <S.LogosWrapper>
          <div>
            <span>Created by</span>
            <br/>
            <CorebizLogo/>
          </div>
          <VtexLogo/>
        </S.LogosWrapper>

      </S.ContentWrapper>
    </S.Footer>
  )
}
