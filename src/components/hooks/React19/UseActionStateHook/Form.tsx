import { useActionState } from "react";
import { addToCart } from "./actions.ts";

interface FormProps {
  itemID: string;
  itemTitle: string;
}

const Form: React.FC<FormProps> = ({ itemID, itemTitle }) => {
  const [message, formAction, isPending] = useActionState(addToCart, null);

  return (
    <form action={formAction}>
      <h4>{itemTitle}</h4>
      <input type="hidden" name="itemID" value={itemID} />
      <input type="text" name="random" />
      <button type="submit">Add to Cart</button>
      {isPending ? "Loading..." : message}
    </form>
  );
};

export default Form;
