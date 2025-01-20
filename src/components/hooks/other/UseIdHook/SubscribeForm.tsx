import { useId } from "react";

const SubscribeForm: React.FC = () => {
  const id = useId();

  return (
    <form>
      <label htmlFor={id}>Email:</label>
      <input type="email" id={id} />
    </form>
  );
};
export default SubscribeForm;
