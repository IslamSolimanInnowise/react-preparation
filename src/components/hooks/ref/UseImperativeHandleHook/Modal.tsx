import { forwardRef, useImperativeHandle, useRef, useState } from "react";

interface ModalProps {
  text: string;
}

export interface ModalRef {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalRef, ModalProps>(({ text }, ref) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [dialogClass, setDialogClass] = useState("modal");

  useImperativeHandle(
    ref,
    () => {
      return {
        open: () => setDialogClass(`${dialogClass} open`),
        close: () => setDialogClass("modal"),
      };
    },
    [dialogClass]
  );

  return (
    <div ref={dialogRef} className={dialogClass}>
      <h4>{text}</h4>
    </div>
  );
});

export default Modal;
