import { useMemo, useState } from "react";

function double(n: number): number {
  for (let i = 0; i < 900000000; i++) {
    //do nothing
  }

  console.log(n);
  return n * 2;
}

const UseMemoHook: React.FC = () => {
  const [num, setNum] = useState(1);
  const [unDoubled, setUndoubled] = useState(1);
  const doubled: number = useMemo(() => double(num), [num]);

  return (
    <div>
      <h3>UseMemo</h3>
      <button onClick={() => setNum((num) => num + 1)}>Increment Num</button>
      <br />
      <br />
      <button onClick={() => setUndoubled((unDoubled) => unDoubled + 1)}>
        Increment Undoubled
      </button>
      <br />
      <br />
      <p>The number is {num}</p>
      <p>And the doubled number is {doubled}</p>
      <p>And the unDoubled number is {unDoubled}</p>
    </div>
  );
};
export default UseMemoHook;
