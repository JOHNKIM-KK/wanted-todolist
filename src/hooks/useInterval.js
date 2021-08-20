import { useRef, useEffect } from "react";

export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    // 언마운트되기전 clearInterval을 해준다.
    return () => clearInterval(id);
  }, [delay]);
}
