import React from 'react'
import bannerImg from "../../assets/banner.png"
import * as S from "./styles";

export default function Slide() {
  return (
    <S.Slide img={bannerImg}>
      <S.SlideContent>
        <S.SlideTitle>Olá, o que você está buscando?</S.SlideTitle>
        <S.SlideSubtitle>
          Criar ou migrar seu <br/> 
          e-commerce?
        </S.SlideSubtitle>
      </S.SlideContent>
    </S.Slide>
  )
}
