export const randomCode = (length, upperCase = false) => {
  const symbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)]

  const code = [...Array(length)].map(getRandomSymbol).join('')

  return upperCase ? code.toUpperCase() : code
}