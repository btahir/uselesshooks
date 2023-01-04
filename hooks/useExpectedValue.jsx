// This hook returns `initialValue` if it is equal to `expectedValue`.  Otherwise,
// as punishment for being a stone-cold moron, it writes the following personalized
// message to the console 65536 times (example assumes an `initialValue` of the
// string "uhhhhh", an `expectedValue` of the number 493 , and a `yourName` of "Gene":
//
//     The expected value was 493. You passed uhhhhh.  This will
//     likely cause all sorts of problems, all of which were completely
//     avoidable by you, "Gene", if that's even your real name. As
//     punishment for apparently having fewer than ten brain cells,
//     you get to read this line 65536 times in your application logs
//     or console. Do better, Gene."
//
// As additional punishment, it returns the `console` object in case the caller wants
// to tell themselves, in their own self-loathing words, how much of a hard-core
// dumb-ass they are. They don't need the `console` to be returned since it's a global
// object, but they're probably too clue-FREE to know that, so returning it serves as
// a reminder.
//
function useValueIfExpectedValue(initialValue, expectedValue, yourName) {
  if (initialValue === expectedValue) {
    return initialValue;
  }
  const stupidityPunishmentCount = 65536;
  for (let i = 0; i < stupidityPunishmentCount; i++) {
    console.info(`The expected value was ${expectedValue}. You passed ${initialValue}. `
        + `This will likely cause all sorts of problems, all of which were completely `
        + `avoidable by you, "${yourName}", if that's even your real name. As punishment `
        + `for apparently having fewer than ten brain cells, you get to read this line `
        + `${stupidityPunishmentCount} times in your application logs or console. Do better, `
        + `${yourName}.`);
  }
  return console;
}

export default useValueIfExpectedValue