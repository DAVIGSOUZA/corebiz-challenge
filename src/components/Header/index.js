import React, { useState } from 'react'
import useGlobalContext from "../../Global";
import {ReactComponent as Logo} from "../../assets/logo.svg"
import {ReactComponent as SearchIcon} from "../../assets/search.svg"
import {ReactComponent as UserIcon} from "../../assets/user.svg"
import {ReactComponent as CartIcon} from "../../assets/cart.svg"
import {ReactComponent as MenuIcon} from "../../assets/icon-menu.svg"
import * as S from "./styles"

export default function Header() {
  const { amount } = useGlobalContext()
  const [showMobileMenuItems, setShowMobileMenuItems] = useState(false)

  return (
    <S.Header>
      <S.MenuWrapper>

        <S.MobileMenu>
          <MenuIcon 
            className="display-none mobile-show" 
            onClick={() => setShowMobileMenuItems(prevState => !prevState)}
          />
          <S.MobileMenuItem 
            className={showMobileMenuItems ? 'display-none  mobile-show' : 'display-none'}
          >
            <S.UserWrapper>
              <UserIcon/>
              <span>Minha Conta</span>
            </S.UserWrapper>
          </S.MobileMenuItem>
        </S.MobileMenu>

        <Logo/>
        
        <S.SearchWrapper className="mobile-hide">
          <S.SearchInput type="text" placeholder="O que está procurando?" />
          <SearchIcon className="search-icon"/>
        </S.SearchWrapper>

        <S.UserWrapper className="mobile-hide">
          <UserIcon/>
          <span>Minha Conta</span>
        </S.UserWrapper>

        <S.CartWrapper>
          <CartIcon/>
          <span>{amount}</span>
        </S.CartWrapper>

      </S.MenuWrapper>

      <S.SearchWrapper className="display-none mobile-show">
        <S.SearchInput type="text" placeholder="O que está procurando?" />
        <SearchIcon className="search-icon"/>
      </S.SearchWrapper>

    </S.Header>
  )
}
