// This hook uses the useState and useEffect hooks to set and update the current time every second. 
// The useState hook is used to store the current time, and the useEffect hook is used to set an 
// interval that updates the current time every second. The hook returns the current time.
import { useState, useEffect } from 'react'

function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return currentTime
}

export default useCurrentTime
