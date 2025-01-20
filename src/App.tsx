import UseContextHook from "./components/hooks/context/UseContextHook/UseContextHook";
import UseEffectHook from "./components/hooks/effect/UseEffectHook/UseEffectHook";
import UseLayoutEffectExample from "./components/hooks/effect/UseLayoutEffectHook/UseLayoutEffectHook";
import UseDebugValueHook from "./components/hooks/other/UseDebugValueHook/UseDebugValueHook";
import UseIdHook from "./components/hooks/other/UseIdHook/UseIdHook";
import UseSyncExternalStoreHook from "./components/hooks/other/UseSyncExternalStoreHook/UseSyncExternalStoreHook";
import UseCallbackHook from "./components/hooks/performance/UseCallbackHook/UseCallbackHook";
import UseDefferedValueHook from "./components/hooks/performance/UseDeferredValueHook/UseDefferedValue";
import UseMemoHook from "./components/hooks/performance/UseMemoHook/UseMemoHook";
import UseTransitionHook from "./components/hooks/performance/UseTransitionHook/UseTransitionHook";
import UseActionStateHook from "./components/hooks/React19/UseActionStateHook/UseActionStateHook";
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
      <UseEffectHook />
      <UseLayoutEffectExample />

      {/* Performance Hooks */}
      <h2>Performance Hooks</h2>
      <UseMemoHook />
      <UseCallbackHook />
      <UseTransitionHook />
      <UseDefferedValueHook />

      {/* Other Hooks */}
      <h2>Other Hooks</h2>
      <UseDebugValueHook />
      <UseIdHook />
      <UseSyncExternalStoreHook />

      {/* React 19 Hooks */}
      <h2>React 19 Hooks</h2>
      <UseActionStateHook />
    </div>
  );
};
export default App;
