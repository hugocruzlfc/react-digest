import PropTypes from "prop-types";
import { Person } from "./Person";

const PersonComponent = ({ optionalPerson }) => {
  const { firstName, lastName } = optionalPerson ?? {};
  return (
    <>
      <div>
        {firstName} {lastName}
      </div>
    </>
  );
};

PersonComponent.propTypes = {
  optionalPerson: PropTypes.instanceOf(Person),
};

export default PersonComponent;
