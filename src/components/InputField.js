import * as PropTypes from "prop-types";

const InputField = ({ label, value, validity, ...inputProps }) => (
  <div className="input-field col s12">
    <input
      id="amount"
      type="text"
      {...inputProps}
      className={validity}
      value={value}
    />
    <span
      className="helper-text"
      data-error="Erreur"
      data-success="Valide"
    ></span>
    <label htmlFor="amount">{label}</label>
  </div>
);

InputField.propTypes = {
  label: PropTypes.string
};

export default InputField;
