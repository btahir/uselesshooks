// This hook has two state variables: number1 and number2, which are initialized
// with the initialNumber1 and initialNumber2 arguments. It also has a function
// called addNumbers that returns the sum of number1 and number2. The hook returns an array containing addNumbers.
import { useState } from 'react'

function useAddTwoNumbers(initialNumber1, initialNumber2) {
  const [number1] = useState(initialNumber1)
  const [number2] = useState(initialNumber2)

  function addNumbers() {
    return number1 + number2
  }

  return [addNumbers]
}

export default useAddTwoNumbers
