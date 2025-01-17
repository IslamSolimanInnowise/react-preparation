import { useContext } from "react";
import { ContextHook } from "./ThemeContext";

const Button: React.FC = () => {
  const context = useContext(ContextHook);

  if (!context) {
    throw new Error("ContextHook must be used within a Provider");
  }

  const { theme, setTheme } = context;

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#ccc",
        color: theme === "dark" ? "#ccc" : "#333",
        height: "100px",
        lineHeight: "100px",
      }}
    >
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        My current theme is {theme}
      </button>
    </div>
  );
};
export default Button;
