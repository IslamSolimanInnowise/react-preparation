import { useState } from "react";

function iWillWorkEveryTime() {
  console.log("See ?");
  return 20;
}

const UseStateHook: React.FC = () => {
  const [count, setCount] = useState(0);
  const [myFuncVal, setMyFuncVal] = useState(iWillWorkEveryTime());

  function handleClick() {
    //[1] basic example
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);

    // [2] function state example
    setMyFuncVal(myFuncVal + 1);
    console.log(myFuncVal);
  }

  return (
    <div>
      <h3>UseState</h3>
      <button onClick={handleClick}>Current count is {count}</button>
    </div>
  );
};
export default UseStateHook;
