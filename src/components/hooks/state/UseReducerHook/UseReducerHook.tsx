import { useReducer } from "react";
import { initialValue, reducer } from "./reducer";

const UseReducerHook: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  function handleAddition() {
    dispatch({ type: "increment" });
  }

  return (
    <div>
      <h3>UseReducer</h3>
      <button onClick={handleAddition}>
        My Reducer count is {state.count}
      </button>
    </div>
  );
};
export default UseReducerHook;
