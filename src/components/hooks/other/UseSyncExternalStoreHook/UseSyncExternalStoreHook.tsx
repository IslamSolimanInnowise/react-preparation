import { useState } from "react";
import Timer1 from "./Timer1";
import Timer2 from "./Timer2";

const UseSyncExternalStoreHook: React.FC = () => {
  const [showNow, IsShowNow] = useState(true);
  return (
    <div>
      <h3>UseSyncExternalStore</h3>
      <button onClick={() => IsShowNow(!showNow)}>Toggle</button>
      {showNow && <Timer1 />}
      <Timer1 />
      {showNow && <Timer2 />}
      <Timer2 />
    </div>
  );
};
export default UseSyncExternalStoreHook;
