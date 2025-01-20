import { useDebugValue, useState } from "react";

export function useTest() {
  const [value, setValue] = useState("This is a text value");
  useDebugValue(value);
  useDebugValue(`Only when devtools are open ${value}`, (v) => v.toUpperCase());

  return { value, setValue };
}
