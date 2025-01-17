import React, { useState, useEffect, useCallback } from "react";

const UseCallbackHook: React.FC = () => {
  const [data, setData] = useState<{ id: number }[]>([]);
  const [count, setCount] = useState(0);

  const fetchData = useCallback(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const result = await response.json();
    setData(result);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <h3>UseCallback</h3>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseCallbackHook;
