import UseContextHook from "./components/hooks/context/UseContextHook/UseContextHook";
import UseImperativeHandleHook from "./components/hooks/ref/UseImperativeHandleHook/UseImperativeHandleHook";
import UseRefHook from "./components/hooks/ref/UseRefHook/UseRefHook";
import UseReducerHook from "./components/hooks/state/UseReducerHook/UseReducerHook";
import UseStateHook from "./components/hooks/state/UseStateHook/UseStateHook";

const App: React.FC = () => {
  return (
    <div>
      <h1>React Hooks</h1>
      {/* State Hooks */}
      <h2>State Hooks</h2>
      <UseStateHook />
      <UseReducerHook />
      {/* Context Hooks */}
      <h2>Context Hooks</h2>
      <UseContextHook />
      {/* Ref Hooks */}
      <h2>Ref Hooks</h2>
      <UseRefHook />
      <UseImperativeHandleHook />
      {/* Effect Hooks */}
      <h2>Effect Hooks</h2>
      {/* Custom Hooks */}
    </div>
  );
};
export default App;
