/*
Calcula el factorial de un numero:
link: https://www.freecodecamp.org/espanol/news/tres-formas-de-factorizar-un-numero-en-javascript/
*/

// Usando recursión
const factorial = (num) => {
  if(num < 0)
    return -1
  else if(num == 0)
    return 1
  else {
    return (num * factorial(num - 1) )
  }
}