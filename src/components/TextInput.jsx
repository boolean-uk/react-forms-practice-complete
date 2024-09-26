import PropTypes from "prop-types";

function TextInput({ label, type, name, value, onChange, required = false }) {
  return (
    <>
      <label>
        {label}

        {required && (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required
          />
        )}
        {!required && (
          <input type={type} name={name} value={value} onChange={onChange} />
        )}
      </label>
    </>
  );
}

export default TextInput;

TextInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool
}