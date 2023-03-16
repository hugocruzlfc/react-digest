//npm i prop-types
import PropTypes from "prop-types";

const FooComponent = ({
  optionalArray,
  optionalBool,
  optionalFunc,
  optionalNumber,
  optionalObject,
  optionalString,
  optionalSymbol,
}) => {
  return (
    <>
      <div>{JSON.stringify(optionalArray)}</div>
      <div>{optionalBool}</div>
      <div>{JSON.stringify(optionalFunc)}</div>
      <div>{optionalNumber}</div>
      <div>{JSON.stringify(optionalObject)}</div>
      <div>{optionalString}</div>
      <div>{optionalSymbol.toString()}</div>
    </>
  );
};

FooComponent.propTypes = {
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
};

export default FooComponent;
