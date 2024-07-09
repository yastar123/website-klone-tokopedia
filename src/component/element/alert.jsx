import propTypes from "prop-types";

const Alert = ({ message, type, totalCart, className }) => {
  const typeClasses = {
    success: "bg-[#00aa5b]",
  };

  return (
    <div className={`${typeClasses[type]} rounded-lg  flex gap-3 text-center
    ${className}`}>
      <p className="font-sans font-bold text-white tracking-widest">{message}</p>
      <p className="font-sans font-bold text-black">{totalCart}</p>
    </div>
  );
};

Alert.propTypes = {
  message: propTypes.string,
  type: propTypes.string,
  totalCart: propTypes.number,
  className: propTypes.string,

};

export default Alert;
