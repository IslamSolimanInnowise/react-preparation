import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const UseEffectHook: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [width, setWidth] = useState(window.innerWidth);

  async function fetchUsers() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const widthResizer = () => setWidth(window.innerWidth);

    window.addEventListener("resize", widthResizer);

    return () => removeEventListener("resize", widthResizer);
  }, []);

  return (
    <div>
      <h3>UseEffect</h3>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
      <h4>The window width is {width}px</h4>
    </div>
  );
};
export default UseEffectHook;
