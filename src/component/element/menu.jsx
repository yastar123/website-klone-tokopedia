import { NavLink } from "react-router-dom"
import propTypes from "prop-types"
const Menu = ({text, icon, className}) => {
  return (
    <div className="w-full py-2 px-6 flex justify-between">
      <div className="font-bold text-lg w-5/6">{text}</div>
      <NavLink className={`w-8 rounded-full items-center flex justify-center bg-white shadow-md h-[30px]`} to="/">
        <div className={`${className}`}>{icon}</div>
      </NavLink>
    </div>
  )
}

Menu.propTypes = {
  text: propTypes.string,
  icon: propTypes.string,
  className: propTypes.string
}

export default Menu