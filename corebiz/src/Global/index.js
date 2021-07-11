import React, { useState, useContext, createContext } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {
  const [amount, setAmount] = useState(Number(localStorage.getItem('amount')) || 0)
  const [products, setProducts] = useState([])

  return(
    <GlobalContext.Provider 
      value={ { amount, setAmount, products, setProducts } }
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default function useGlobalContext() {
  const data = useContext(GlobalContext)
  const { amount, setAmount, products, setProducts } = data
  return { amount, setAmount, products, setProducts }
}
