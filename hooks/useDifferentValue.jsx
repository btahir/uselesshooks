// This hook returns a value other than `initialValue`.  Useful when you want literally
// any value other than the one you've got right now.
function useDifferentValue(initialValue) {
  let different = false;
  let differentValue;
  while (!different) {
    const randomNum = Math.random();
    if (randomNum < 0.1) {
      differentValue = randomNum;
    }
    else if (randomNum < 0.2) {
      differentValue = `${randomNum}`;
    }
    else if (randomNum < 0.3) {
      differentValue = true;
    }
    else if (randomNum < 0.4) {
      differentValue = false;
    }
    else if (randomNum < 0.5) {
      differentValue = {value: randomNum};
    }
    else if (randomNum < 0.6) {
      differentValue = [randomNum, randomNum, randomNum];
    }
    else if (randomNum < 0.7) {
      differentValue = new Date(Math.floor(randomNum * Date.now()));
    }
    else if (randomNum < 0.8) {
      differentValue = () => randomNum;
    }
    else if (randomNum < 0.9) {
      differentValue = Symbol(`${randomNum}`);
    }
    else {
      differentValue = null;
    }
    if (differentValue !== initialValue) {
      different = true;
    }
  }
  return differentValue;
}

export default useDifferentValue
