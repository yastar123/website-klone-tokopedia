import propTypes from "prop-types";

const Button = ({ text, className, children, onClick, type }) => {
  return (
    <button className={`text-center font-semibold ${className}`} type={type} onClick={onClick}>{text}{children}</button>
  );
};

Button.propTypes = {
  text: propTypes.string,
  className: propTypes.string,
  children: propTypes.element,
  onClick: propTypes.func,
  type: propTypes.string
};

export default Button;
