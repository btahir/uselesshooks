// a custom React hook that converts a string into a number
import { useState, useEffect } from 'react'

function useStringToNumber(initialValue) {
  const [value, setValue] = useState(initialValue)

  function convertToNumber(stringValue) {
    setValue(Number(stringValue))
  }

  useEffect(() => {
    convertToNumber(initialValue)
  }, [])

  return value
}

export default useStringToNumber
