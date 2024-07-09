import NavbarTop from "./navbarTop";
import NavbarMiddle from "./navbarMiddle";
import NavbarBottom from "./navbarBottom";
import User from "../../../element/user";

const Navbar = () => {
  return (
    <div className=" mt-14 sm:mt-0">
      <NavbarTop className={"bg-slate-200 px-5 "} />
      <NavbarMiddle />
      <NavbarBottom />
      <User />
    </div>
  );
};

export default Navbar;
