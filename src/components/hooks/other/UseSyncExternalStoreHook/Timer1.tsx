import { useEffect, useState } from "react";

const Timer1: React.FC = () => {
  const [now, setNow] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <p>The time is: {now}</p>;
};

export default Timer1;
