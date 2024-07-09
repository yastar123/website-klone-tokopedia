import propTypes from "prop-types";

const Input = ({ type, className, placeholder, onChange, value, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        className={`${className}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

Input.propTypes = {
  type: propTypes.string,
  className: propTypes.string,
  placeholder: propTypes.string,
  children: propTypes.element,
  onChange: propTypes.func,
  value: propTypes.string,
  onSubmit: propTypes.func,
};

export default Input;
