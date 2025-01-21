import { useState } from "react";
import { deliverMessage } from "./actions.js";
import Thread from "./Thread.js";

type SendMessageFunc = (formData: FormData) => void;

const UseOptimisticHook: React.FC = () => {
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false, key: 1 },
  ]);

  const sendMessage: SendMessageFunc = async (formData) => {
    const sentMessage = await deliverMessage(formData.get("message") as string);

    setMessages((messages) => [
      ...messages,
      {
        text: sentMessage + " now From state",
        sending: false,
        key: messages.length + 1,
      },
    ]);
  };

  return (
    <div>
      <h3>UseOptimistic</h3>
      <Thread messages={messages} sendMessage={sendMessage} />
    </div>
  );
};
export default UseOptimisticHook;
