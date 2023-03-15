import React, { useEffect, useRef } from "react";

export default function Example_1() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return <input ref={inputRef} />;
}

// usar una referencia para enfocar un campo de entrada cuando se monta el componente
