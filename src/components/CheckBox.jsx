import PropTypes from "prop-types";

function CheckBox({ label, name, value, onChange }) {
    return (
      <label>
        {label}
        {value && (
          <input
            type="checkbox"
            name={name}
            id={name}
            onChange={onChange}
            checked
          />
        )}
        {!value && (
          <input
            type="checkbox"
            name={name}
            id={name}
            onChange={onChange}
          />
        )}
      </label>
    );
}

export default CheckBox

CheckBox.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func
}