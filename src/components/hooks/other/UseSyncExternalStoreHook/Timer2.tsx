import { useSyncExternalStore } from "react";

type NotifierFunction = () => void;

const notifiers: Set<NotifierFunction> = new Set();

setInterval(() => {
  notifiers.forEach((notifier) => notifier());
}, 1000);

const Timer2: React.FC = () => {
  function subscribe(notifier: NotifierFunction) {
    notifiers.add(notifier);

    return () => notifiers.delete(notifier);
  }

  function getSnapShot() {
    return new Date().toLocaleTimeString();
  }

  const storeValue = useSyncExternalStore(subscribe, getSnapShot);

  return <p>The Timer2 time is :{storeValue}</p>;
};
export default Timer2;
