import { useRef, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const handleClick = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment count</button>
    </>
  );
}
