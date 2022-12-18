// This hook fetches and returns a random joke from a jokes API every time it is called.
// Shout out to this awesome repo for jokes: https://github.com/15Dkatz/official_joke_api
import { useState, useEffect } from 'react'

const jokesAPI = 'https://official-joke-api.appspot.com/random_joke'

function useJoke() {
  const [joke, setJoke] = useState(null)

  async function fetchJoke() {
    const response = await fetch(jokesAPI)
    const data = await response.json()
    setJoke(data)
  }

  useEffect(() => {
    fetchJoke()
  }, [])

  return joke
}
export default useJoke
