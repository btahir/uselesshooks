// This hook fetches and returns a random Star Wars character every time it is called.
// shout out to swapi.dev for the API!
import { useState, useEffect } from 'react'

const starWarsAPI = 'https://swapi.dev/api/people/'

function useStarWarsCharacter() {
  const [character, setCharacter] = useState(null)

  async function fetchCharacter() {
    const response = await fetch(starWarsAPI)
    const data = await response.json()
    const result =
      data.results[Math.floor(Math.random() * data.results.length)].name
    setCharacter(result)
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  return character
}

export default useStarWarsCharacter
