import UseContextHook from "./components/hooks/context/UseContextHook/UseContextHook";
import UseReducerHook from "./components/hooks/state/UseReducerHook/UseReducerHook";
import UseStateHook from "./components/hooks/state/UseStateHook/UseStateHook";

const App: React.FC = () => {
  return (
    <div>
      <h1>React Hooks</h1>
      {/* State Hooks */}
      <UseStateHook />
      <UseReducerHook />
      {/* Context Hooks */}
      <UseContextHook />
    </div>
  );
};
export default App;
