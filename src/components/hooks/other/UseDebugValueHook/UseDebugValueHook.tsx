import { useTest } from "./useTest";

const UseDebugValueHook: React.FC = () => {
  const { value, setValue } = useTest();
  return (
    <div>
      <h3> UseDebugValue</h3>
      <button onClick={() => setValue(value + 1)}>Increase value</button>
      <p>My value is : {value}</p>
    </div>
  );
};
export default UseDebugValueHook;
