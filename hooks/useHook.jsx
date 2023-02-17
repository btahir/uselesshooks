// This hook takes a hook and returns a function that calls the hook with the given value.
// Usage: const [state, setState] = useHook(useState)('initial value');
// You can also use with useEffect.
// Usage: useHook(useEffect)(() => { ... }, []);
// Gorgeous
import useValue from "./useValue";

function useHook(hook) {
  const isHook = useValue(
    typeof hook === "function" && hook.name.substring(0, 3) === "use"
  );

  if (!isHook) {
    throw new Error("The param must be a hook.");
  }

  return (...hookParams) => hook(...hookParams);
}

export default useHook;
