import MyAppContext from "./MyAppContext";
import Button from "./Button";

const UseContextHook: React.FC = () => {
  return (
    <MyAppContext>
      <div>
        <h2>UseContext Hook</h2>
        <Button />
      </div>
    </MyAppContext>
  );
};
export default UseContextHook;
