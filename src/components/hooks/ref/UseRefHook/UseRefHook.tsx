import { useRef } from "react";

const UseRefHook: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!inputRef.current?.value) {
      alert("Please enter a value");
    } else {
      alert(inputRef.current.value);
    }
  }

  return (
    <div>
      <h3>UseRef</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default UseRefHook;
