import { useDeferredValue, useState } from "react";
import List from "./List";

const UseDeferredValueHook: React.FC = () => {
  const [text, setText] = useState(""); // Immediate value
  const deferredQuery = useDeferredValue(text); // Deferred value

  return (
    <div>
      <h3>UseDefferedValue</h3>
      <div>
        <input
          type="text"
          placeholder="Search items..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <List query={deferredQuery} />
    </div>
  );
};

export default UseDeferredValueHook;
