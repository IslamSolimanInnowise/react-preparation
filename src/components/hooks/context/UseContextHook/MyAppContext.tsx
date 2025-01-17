import { PropsWithChildren, useState } from "react";
import { ContextHook } from "./ThemeContext";

const MyAppContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ContextHook.Provider value={{ theme, setTheme }}>
      {children}
    </ContextHook.Provider>
  );
};
export default MyAppContext;
