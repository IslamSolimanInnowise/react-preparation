import { useRef } from "react";
import Modal, { ModalRef } from "./Modal";

const UseImperativeHandleHook = () => {
  const modalController = useRef<ModalRef>(null);

  return (
    <div>
      <h3>UseImperativeHandle</h3>
      <button onClick={() => modalController.current?.open()}>
        Show Modal
      </button>
      <button onClick={() => modalController.current?.close()}>
        Close Modal
      </button>

      <Modal
        text="This is a modal that is controlled from outside"
        ref={modalController}
      />
    </div>
  );
};

export default UseImperativeHandleHook;
