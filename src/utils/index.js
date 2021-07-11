export const BASE_URL = 'https://corebiz-test.herokuapp.com/api/v1/'

// regex found on --> https://stackoverflow.com/questions/5342375/regex-email-validation
export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const toLocalCurrency = (price) => {
  return (`R$ ${(price / 100).toFixed(2)}`).replace('.', ',')
}

export const challengeMessage = () => {
  alert('Funcionalidade fora do escopo do desafio')
}