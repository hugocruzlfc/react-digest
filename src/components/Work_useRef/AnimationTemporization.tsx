import { useRef, useEffect } from "react";

function MyComponent() {
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, []);

  return <p>Check the console</p>;
}
