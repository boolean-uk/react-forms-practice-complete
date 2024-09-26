import PropTypes from "prop-types";

function TextArea({ label, name, rows, placeholder, value, onChange }) {
    return (
      <label>
        {label}
        <textarea
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      </label>
    );
}

export default TextArea

TextArea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.number,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}