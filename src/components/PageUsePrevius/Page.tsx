import { ChangeEvent, useState } from "react";
import {
  PriceWithStandard,
  PriceWithPersistent,
  PriceWithPersistentWithProps,
  PriceWithPersistentWithPropsAndMatcher,
} from "./components/Prices";

const prices = [100, 200, 300, 400, 500, 600, 700];

export const Page = () => {
  const [price, setPrice] = useState(100);
  const [name, setName] = useState("");

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const onPriceChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setPrice(Number(event.target.value));

  return (
    <div className="App">
      Type your name here:{" "}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      Select price here:{" "}
      <select
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      >
        {prices.map((price) => (
          <option
            key={price}
            value={price}
          >
            {price}$
          </option>
        ))}
      </select>
      <br />
      <h4>Standard hook</h4>
      <PriceWithStandard price={price} />
      <h4>Persistent hook</h4>
      <PriceWithPersistent price={price} />
      <h4>Persistent with props</h4>
      <PriceWithPersistentWithProps price={price} />
      <h4>Persistent hook used with props and matcher</h4>
      <PriceWithPersistentWithPropsAndMatcher price={price} />
    </div>
  );
};
