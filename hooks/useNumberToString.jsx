// a custom React hook that converts a number into a string
import { useState, useEffect } from 'react'

function useNumberToString(initialValue) {
  const [value, setValue] = useState(initialValue)

  function convertToString(numberValue) {
    setValue(String(numberValue))
  }

  useEffect(() => {
    convertToString(initialValue)
  }, [])

  return value
}

export default useNumberToString
