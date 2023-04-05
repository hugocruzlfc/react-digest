import {
  usePreviousStandard,
  usePreviousPersistent,
  usePreviousPersistentWithMatcher,
} from "../../../hooks/usePrevius";

export const PriceWithStandard = ({ price }: { price: number }) => {
  const prevPrice = usePreviousStandard(price);
  const icon = prevPrice && prevPrice < price ? "😡" : "😊";

  return (
    <div>
      Current price: {price}; <br />
      Previous price: {prevPrice} {icon}
    </div>
  );
};

export const PriceWithPersistent = ({ price }: { price: number }) => {
  const prevPrice = usePreviousPersistent(price);
  const icon = prevPrice && prevPrice < price ? "😡" : "😊";

  return (
    <div>
      Current price: {price}; <br />
      Previous price: {prevPrice} {icon}
    </div>
  );
};

export const PriceWithPersistentWithProps = (props: { price: number }) => {
  const prevProps = usePreviousPersistent(props);
  const icon = prevProps && prevProps.price < props.price ? "😡" : "😊";

  return (
    <div>
      Current price: {props.price}; <br />
      Previous price: {prevProps?.price} {icon}
    </div>
  );
};

export const PriceWithPersistentWithPropsAndMatcher = (props: {
  price: number;
}) => {
  const prevProps = usePreviousPersistentWithMatcher(
    props,
    (prev, current) => prev.price === current.price
  );
  const icon = prevProps && prevProps.price < props.price ? "😡" : "😊";

  return (
    <div>
      Current price: {props.price}; <br />
      Previous price: {prevProps?.price} {icon}
    </div>
  );
};
