import { useEffect, useRef } from "react";

function useEventListener(eventType, handler, target = window) {
  const handlerRef = useRef();

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => handlerRef.current(event);
    target.addEventListener(eventType, eventListener);

    return () => {
      target.removeEventListener(eventType, eventListener);
    };
  }, [eventType, target]);
}

export default useEventListener;
