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
  "You're ugly and your mother dresses you funny.",
  'Your mother wears combat boots.',
  "Don't be ashamed of who you are. That's your parents job.",
  'Your mother was a hamster and your father smells of elderberries.'
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
