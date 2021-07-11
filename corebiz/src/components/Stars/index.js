import React from 'react'
import { ReactComponent as StarSolid } from "../../assets/star-solid.svg"
import { ReactComponent as StarOutlined } from "../../assets/star-outlined.svg"
import * as S from "./styles"

export default function Stars({starsReceived}) {

  const stars = []

  for (starsReceived; starsReceived > 0; starsReceived--) {
    stars.push('solid') 
  }

  if (stars.length < 5) {
    let outlinedStars = 5 - stars.length
    for (outlinedStars; outlinedStars > 0; outlinedStars--) {
      stars.push('outlined') 
    }
  }
  
  return (
    <S.StarsWrapper>
      { stars.map((star, index) => {
          return star === 'solid' 
            ? <StarSolid key={index}/> 
            : <StarOutlined key={index}/>
        })
      }
    </S.StarsWrapper>
  )
}
