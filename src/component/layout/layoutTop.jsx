import Img from "../element/img";
import Button from "../element/button";
import Input from "../element/input";
import { Search, ShoppingCart, Mail, Bell, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import propsTypes from "prop-types";

const LayoutTop = ({ onClick }) => {
  return (
    <div className="flex sm:py-3 py-2 font-sans sm:justify-between fixed top-0 right-0 left-0 z-10 sm:hidden bg-white">
      <div className="hidden sm:flex">
        <Img src="/image/tkp-logo.png" className="xl:w-44 sm:w-15" />
      </div>
      <div className="py-1.5 rounded-md hover:bg-slate-200 text-center text-slate-800 hidden sm:flex">
        <Button className={"px-2"}>Kategori</Button>
      </div>
      <div className="flex rounded-lg border border-slate-400 sm:w-[640px] w-[550px] h-[40px] mx-2">
        <Search className="self-center justify-center sm:w-14 w-5 text-slate-400 mx-2 " />
        <Input
          placeholder={"Cari Di Tokepedia"}
          className={
            "w-full placeholder:text-left active:border-none focus:outline-none"
          }
        ></Input>
      </div>
      <div className="self-center sm:w-20 w-full items-center sm:justify-center flex justify-evenly text-slate-800 sm:hidden">
        <NavLink>
          <ShoppingCart className="text-[#333] hover:text-[#00aa5b]" />
        </NavLink>
        <NavLink>
          <Mail className="text-[#333] hover:text-[#00aa5b]" />
        </NavLink>
        <NavLink>
          <Bell className="text-[#333] hover:text-[#00aa5b]" />
        </NavLink>
        <Button onClick={onClick}>
          <Menu className="text-[#333] hover:text-[#00aa5b]" />
        </Button>
      </div>
      <div className="hidden sm:flex px-7 border-l-2 border-slate-200 ">
        <NavLink to={"/"} className="py-1">
          <Button
            className={
              "border border-[#00aa5b] text-[#00aa5b] h-full font-bold rounded-lg px-4 -tracking-wider mr-3 hover:bg-[#00aa5b] hover:text-white "
            }
          >
            Masuk
          </Button>
        </NavLink>
        <NavLink to={"/register"} className="py-1">
          <Button
            className={
              "bg-[#00aa5b] text-white font-bold rounded-lg h-full px-4 -tracking-wider hover:bg-white hover:text-[#00aa5b] hover:border hover:border-[#00aa5b]"
            }
          >
            Daftar
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

LayoutTop.propTypes = {
  onClick: propsTypes.func,
};

export default LayoutTop;
