import React, { useState } from "react";
import useEventListener from "./useEventListener";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEventListener("click", handleClick);

  return (
    <div>
      <h1>Click Counter</h1>
      <p>You've clicked {count} times.</p>
    </div>
  );
}

export default ClickCounter;
