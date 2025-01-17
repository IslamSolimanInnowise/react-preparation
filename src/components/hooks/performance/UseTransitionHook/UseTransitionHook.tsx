import { useState, useTransition } from "react";

const UseTransitionHook: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [listOfStrokes, setListOfStrokes] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  function handleDataChanging(event: React.ChangeEvent<HTMLInputElement>) {
    setInputText(event.target.value);

    startTransition(() => {
      const arr = [];

      for (let i = 0; i < 50000; i++) {
        arr.push(event.target.value);
      }

      setListOfStrokes(arr);
    });
  }

  return (
    <div>
      <h3>UseTransition</h3>
      <input type="text" value={inputText} onChange={handleDataChanging} />
      {isPending
        ? "Loading..."
        : listOfStrokes.map((stroke, index) => <p key={index}>{stroke}</p>)}
    </div>
  );
};
export default UseTransitionHook;
