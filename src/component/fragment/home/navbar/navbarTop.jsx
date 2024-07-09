import { Smartphone } from "lucide-react";
import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

const navLinks = [
  { to: "/", text: "Tentang Tokopedia" },
  { to: "/", text: "Mitra Tokopedia" },
  { to: "/", text: "Mulai Berjualan" },
  { to: "/", text: "Promo" },
  { to: "/", text: "Tokopedia Care" },
];

const NavbarTop = ({className}) => {
  return (
      <div className={`sm:grid sm:grid-cols-2 sm:justify-between sm:p-1 hidden ${className} `}>
        <div className="flex font-sans">
          <NavLink to={"/"}>
            <Smartphone className="text-slate-500 " />
          </NavLink>
          <p className="pl-2 text-slate-500 text-sm">Download Tokopedia App</p>
        </div>
        <div className="xl:flex sm:hidden justify-evenly">
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.to} className={"text-slate-500 text-sm"}>
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
  );
};

NavbarTop.propTypes = {
  className: propTypes.string
}

export default NavbarTop;
