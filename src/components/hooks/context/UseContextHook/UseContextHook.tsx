import MyAppContext from "./MyAppContext";
import Button from "./Button";

const UseContextHook: React.FC = () => {
  return (
    <MyAppContext>
      <div>
        <h3>UseContext</h3>
        <Button />
      </div>
    </MyAppContext>
  );
};
export default UseContextHook;
