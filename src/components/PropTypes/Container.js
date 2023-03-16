import FooComponent from "./FooComponent";
import PersonComponent from "./PersonComponent";

export default function Container() {
  return (
    <>
      <FooComponent
        optionalArray={[1, 2, 3]}
        optionalBool={false}
        optionalFunc={() => "foo"}
        optionalNumber={123}
        optionalObject={{ foo: "bar" }}
        optionalString="abc"
        optionalSymbol={Symbol("abc")}
      />
      <PersonComponent optionalPerson={new Person("jane", "smith")} />
    </>
  );
}
