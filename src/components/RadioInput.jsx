import PropTypes from "prop-types";

function RadioInput({ label, name, value, checkedOption, onChange }) {
  return (
    <label>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        checked={checkedOption === value}
      />
      {label}
    </label>
  );
}

export default RadioInput;

RadioInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checkedOption: PropTypes.string,
  onChange: PropTypes.func,
};
