import Img from "../../../element/img";
import { Locate, Star } from "lucide-react";
import propsTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ProductBottom = ({ children, className, id }) => {
  return (
    <NavLink className={`flex flex-wrap xl:mt-12 mx-2 my-3 bg-white w-[45%]rounded-lg shadow-lg float-left ${className}`} to={`/home/${id}`} >
      {children}
    </NavLink>
  );
};

const Header = ({ src, id, className }) => {
  return (
    <div className="rounded-t-lg mx-auto" >
      <Img
        src={src}
        className={`object-center rounded-t-lg ${className}`}
        to={`/home/${id}`}
      />
    </div>
  );
};

const Body = ({ name, price, rating, sold, className, location }) => {
  return (
    <div className={`sm:h-[170px] px-2 py-2 ${className} w-full`}>
      <div>
        <p className="text-base -tracking-wide">{name.substring(0, 50)}</p>
        <p className="font-bold">${price}</p>
      </div>
      <div>
        <div className="flex">
          <Star className="text-yellow-500 mr-2" width={18} />
          <p className="text-slate-400 text-sm">
            {rating} | {sold} Terjual
          </p>
        </div>
      </div>
    </div>
  );
};


ProductBottom.Header = Header;
ProductBottom.Body = Body;

ProductBottom.propTypes = {
  children: propsTypes.node.isRequired,
  className: propsTypes.string,
  id: propsTypes.string.isRequired,
};

Header.propTypes = {
  src: propsTypes.string,
  id: propsTypes.string.isRequired,
  className: propsTypes.string,
};

Body.propTypes = {
  name: propsTypes.string.isRequired,
  price: propsTypes.string.isRequired,
  rating: propsTypes.string.isRequired,
  sold: propsTypes.string.isRequired,
  location: propsTypes.string.isRequired,
  className: propsTypes.string,
  id: propsTypes.string.isRequired,
};


export default ProductBottom;
