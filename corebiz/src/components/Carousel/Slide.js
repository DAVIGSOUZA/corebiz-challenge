import React from 'react'
import bannerImg from "../../assets/banner.png"
import * as S from "./styles";

export default function Slide() {
  return (
    <S.Slide>
      <div>
        <S.SlideTitle>Olá, o que você está buscando?</S.SlideTitle>
        <S.SlideSubtitle>
          Criar ou migrar seu <br/> 
          e-commerce?
        </S.SlideSubtitle>
      </div>
      <img src={bannerImg} alt="Mão masculina segurando cartão de crédito" />
    </S.Slide>
  )
}
