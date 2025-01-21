import { useOptimistic, useRef } from "react";

interface Message {
  text: string;
  sending: boolean;
}

export interface ThreadProps {
  messages: Message[];
  sendMessage: (formData: FormData) => void;
}

const Thread: React.FC<ThreadProps> = ({ messages, sendMessage }) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state: Message[], newMessage: string) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  async function formAction(formData: FormData) {
    addOptimisticMessage(formData.get("message") as string);
    formRef.current!.reset();
    await sendMessage(formData);
  }

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Thread;
