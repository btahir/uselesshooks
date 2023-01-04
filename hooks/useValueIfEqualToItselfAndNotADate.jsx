// This hook returns the value if the value is equal to itself, is of type 'boolean', and is
// equal to null.  Otherwise returns a random integer between zero and seven billion. If for
// some reason these tests neither succeed nor fail, returns the string "false".
function useValueIfEqualToItselfAndIsBooleanAndNull(initialValue) {
  if (initialValue === initialValue && typeof initialValue === `boolean` && initialValue === null) {
    return initialValue
  }
  else {
    return Math.floor(Math.random() * 7000000000)
  }
  // Not sure how we'd get here, but anything is possible, so just return
  // "false"; if they don't know what to do with that value, that's not
  // our problem, if it ever was:
  return `false`
}

export default useValueIfEqualToItselfAndIsBooleanAndNull
