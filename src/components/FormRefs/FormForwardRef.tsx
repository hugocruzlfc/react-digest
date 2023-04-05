import { useRef, useState, ForwardedRef, forwardRef } from "react";
import "./FormForwardRef.css";

type InputFieldProps = {
  onChange: (val: string) => void;
};

const InputField = forwardRef(
  ({ onChange }: InputFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input
        ref={ref}
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
);

export const Form = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitClick = () => {
    if (!name) {
      inputRef.current?.focus();
      console.log("Input should be focused if empty!");
    } else {
      console.log("Submit the name here!", name);
    }
  };

  return (
    <form>
      <label>Name</label>
      <br />
      <InputField
        onChange={setName}
        ref={inputRef}
      />
      <button
        onClick={onSubmitClick}
        type="button"
      >
        Submit!
      </button>
    </form>
  );
};
