// This hook generates a new random number between 0 and 100 every time the component renders.
// The useState hook is used to store the current random number, and the useEffect hook is
// used to generate a new random number on every render. The hook returns the current random number.
import { useState, useEffect } from 'react'

function useRandomNumber() {
  const [randomNumber, setRandomNumber] = useState(0)

  useEffect(() => {
    setRandomNumber(Math.round(Math.random() * 100))
  }, [])

  return randomNumber
}

export default useRandomNumber
