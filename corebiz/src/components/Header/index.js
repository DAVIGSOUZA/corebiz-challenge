import React from 'react'
import useGlobalContext from "../../Global";
import {ReactComponent as Logo} from "../../assets/logo.svg"
import {ReactComponent as SearchIcon} from "../../assets/search.svg"
import {ReactComponent as UserIcon} from "../../assets/user.svg"
import {ReactComponent as CartIcon} from "../../assets/cart.svg"
import * as S from "./styles"

export default function Header() {
  const { amount } = useGlobalContext()

  return (
    <S.Header>
      <Logo/>
      <S.MenuWrapper>
        <S.SearchWrapper>
          <S.SearchInput type="text" placeholder="O que está procurando?" />
          <SearchIcon className="search-icon"/>
        </S.SearchWrapper>
        <S.UserWrapper>
          <UserIcon/>
          <span>Minha Conta</span>
        </S.UserWrapper>
        <S.CartWrapper>
          <CartIcon/>
          <span>{amount}</span>
        </S.CartWrapper>
      </S.MenuWrapper>
    </S.Header>
  )
}
