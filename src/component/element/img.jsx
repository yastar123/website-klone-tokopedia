import propTyes from "prop-types";
import { NavLink } from "react-router-dom";

const Img = ({ src, alt, className, to }) => {
  return (
    <NavLink to={to}>
      <img src={src} alt={alt} className={className} />
    </NavLink>
  );
};

Img.propTypes = {
  src: propTyes.string.isRequired,
  alt: propTyes.string.isRequired,
  className: propTyes.string,
  to: propTyes.string,
};

export default Img;
