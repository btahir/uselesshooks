// This hook throws an error once in a while, resulting in bugs that you can bill your client for
import { useEffect } from "react";

function useBugGenerator() {
  useEffect(() => {
    if (Math.random() > 0.01) throw Error("Something went terribly wrong..");
  }, []);

  return insult;
}

export default useBugGenerator;
