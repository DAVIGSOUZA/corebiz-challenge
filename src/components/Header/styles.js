import styled from "styled-components"

export const Header = styled.header`
  max-width: 1200px;
  height: 80px;
  margin: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .display-none {
    display: none;
  }
  @media (max-width: 990px) {
    flex-direction: column;
    .mobile-hide {
      display: none;
    }
    .mobile-show {
      display: block;
    }
  } 
`

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchWrapper = styled.div`
  width: 60%;
  min-width: 280px;
  /* margin: 0 32px; */
  height: 23px;
  position: relative;
  .search-icon {
    position: absolute;
    top: 4px;
    right: 0;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 100%;
  } 
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 1px solid #7a7a7a;
`

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  /* margin: 0 16px; */
  cursor: pointer;
  span {
    margin-left: 4px;
    color: #7a7a7a;
    font-size: 13px;
  }
`

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  /* margin-left: 16px; */
  cursor: pointer;
  span {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #f8475f;
    color: #fff;
    font-weight: 700;
    font-size: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
  }
`

export const MobileMenu = styled.div`
  position: relative;
  cursor: pointer;
`

export const MobileMenuItem = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 140px;
  padding: 8px 4px;
  background-color: #fff;
  border: 1px solid #000;
  z-index: 1;
`




