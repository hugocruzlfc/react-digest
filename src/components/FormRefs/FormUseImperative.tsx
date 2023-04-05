import "./FormUseImperative.css";
import { useRef, useState, RefObject, useImperativeHandle } from "react";

type Api = {
  focus: () => void;
  shake: () => void;
};

type InputFieldProps = {
  onChange: (val: string) => void;
  apiRef: RefObject<Api>;
};

const InputField = ({ onChange, apiRef }: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [shouldShake, setShouldShake] = useState(false);

  useImperativeHandle(
    apiRef,
    () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      shake: () => {
        setShouldShake(true);
      },
    }),

    []
  );

  const className = shouldShake ? "shake" : "";

  return (
    <input
      ref={inputRef}
      type="text"
      onChange={(e) => onChange(e.target.value)}
      className={className}
      onAnimationEnd={() => {
        setShouldShake(false);
      }}
    />
  );
};

export const Form = () => {
  const [name, setName] = useState("");
  const inputApiRef = useRef<Api>(null);

  const onSubmitClick = () => {
    if (!name) {
      inputApiRef.current?.focus();
      inputApiRef.current?.shake();
      console.log("Input should be focused and shaken if empty!");
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
        apiRef={inputApiRef}
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
export default function App() {
  return (
    <div className="App">
      <h1>Form example</h1>
      <p>Click submit and see how "name" field focuses!</p>
      <Form />
    </div>
  );
}
