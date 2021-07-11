import styled from "styled-components"

export const Header = styled.header`
  max-width: 1200px;
  height: 80px;
  margin: 16px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const SearchWrapper = styled.div`
  width: 60%;
  min-width: 280px;
  margin: 0 32px;
  height: 23px;
  position: relative;
  .search-icon {
    position: absolute;
    top: 4px;
    right: 0;
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
  margin: 0 16px;
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
  margin-left: 16px;
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





