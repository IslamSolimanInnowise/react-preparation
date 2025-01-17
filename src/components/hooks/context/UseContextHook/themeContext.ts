import { createContext } from "react";

export interface ContextInterface {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ContextHook = createContext<ContextInterface | undefined>(
  undefined
);
