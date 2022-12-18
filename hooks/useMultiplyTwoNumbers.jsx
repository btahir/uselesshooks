// This hook has two state variables: number1 and number2, which are initialized
// with the initialNumber1 and initialNumber2 arguments. It also has a function
// called multiplyNumbers that returns the product of number1 and number2. The hook returns an array containing multiplyNumbers.
import { useState } from 'react'

function useMultiplyTwoNumbers(initialNumber1, initialNumber2) {
  const [number1] = useState(initialNumber1)
  const [number2] = useState(initialNumber2)

  function multiplyNumbers() {
    return number1 * number2
  }

  return [multiplyNumbers]
}

export default useMultiplyTwoNumbers
