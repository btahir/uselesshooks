// This hook returns a random response from a magic 8-ball every time it is called.
import { useState, useEffect } from 'react'

const magic8BallResponses = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes - definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
]

function useMagic8Ball() {
  const [response, setResponse] = useState(null)

  function getResponse() {
    const index = Math.floor(Math.random() * magic8BallResponses.length)
    setResponse(magic8BallResponses[index])
  }

  useEffect(() => {
    getResponse()
  }, [])

  return response
}

export default useMagic8Ball
