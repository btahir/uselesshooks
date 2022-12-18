// This hook returns a random insult every time it is called.
import { useState, useEffect } from 'react'

const insults = [
  'You are a moron.',
  'You are an imbecile.',
  'You are a dimwit.',
  'You are a dunce.',
  'You are a buffoon.',
  'You are a nitwit.',
  'You are a simpleton.',
]

function useInsult() {
  const [insult, setInsult] = useState(null)

  function getInsult() {
    setInsult(insults[Math.floor(Math.random() * insults.length)])
  }

  useEffect(() => {
    getInsult()
  }, [])

  return insult
}

export default useInsult
