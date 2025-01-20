import Form from "./Form";

const UseActionStateHook: React.FC = () => {
  return (
    <div>
      <h3>UseActionState</h3>
      <Form itemID="1" itemTitle="Item 1 without error" />
      <Form itemID="2" itemTitle="Item 2 with error" />
    </div>
  );
};
export default UseActionStateHook;
