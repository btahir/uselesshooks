// This hook has two state variables: number1 and number2, which are initialized
// with the initialNumber1 and initialNumber2 arguments. It also has a function
// called divideNumbers that returns the division of number1 over number2. The hook returns an array containing divideNumbers.
import { useState } from 'react'

function useDivideTwoNumbers(initialNumber1, initialNumber2) {
  const [number1] = useState(initialNumber1)
  const [number2] = useState(initialNumber2)

  function divideNumbers() {
    return number1 / number2
  }

  return [divideNumbers]
}

export default useDivideTwoNumbers
