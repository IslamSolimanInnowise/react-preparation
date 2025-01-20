import { useDebugValue, useState } from "react";

export function useTest() {
  const [value, setValue] = useState(1);
  useDebugValue(value);
  useDebugValue(`Only when devtools are open ${value}`, (v) => v.toUpperCase());

  return { value, setValue };
}
