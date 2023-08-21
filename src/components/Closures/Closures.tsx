import React, { useCallback, useEffect, useRef, useState } from "react";

export default function Closures() {
    return  <Form />
 }



const Form = () => {
  const [value, setValue] = useState<string>();
  const ref = useRef<()=>void>();

  useEffect(() => {
    ref.current = () => {
      // will be latest
      console.log(value);
    };
  });

  const onClick = useCallback(() => {
    // will be latest
    ref.current?.();
  }, []);

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
      <HeavyComponentMemo
        title="Welcome closures"
        onClick={onClick}
      />
    </>
  );
};


const HeavyComponent = ({ title, onClick }: {
    title: string;
    onClick: () => void;
    }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("render");
    },[]);
    
    return (
        <>
        <h1>{title}</h1>
        <button onClick={onClick}>Click</button>
        <button onClick={() => setCount((prev) => prev + 1)}>
            {count}
        </button>
        </>
    );
}


const HeavyComponentMemo = React.memo(HeavyComponent);

// https://www.developerway.com/posts/fantastic-closures?utm_source=reactdigest&utm_medium&utm_campaign=1698