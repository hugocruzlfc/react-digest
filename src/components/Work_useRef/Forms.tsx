import { useRef, useState } from "react";

function MyComponent() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputRef?.current?.value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
