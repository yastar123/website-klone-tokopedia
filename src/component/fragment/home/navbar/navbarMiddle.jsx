import Img from "../../../element/img";
import Button from "../../../element/button";
import Input from "../../../element/input";
import { Search, ShoppingCart, Mail, Bell } from "lucide-react";
import { NavLink } from "react-router-dom";
import propsTypes from "prop-types";
import { useState, useEffect } from "react";

const NavbarMiddle = ({ onClick }) => {
  const [storedIdsCount, setStoredIdsCount] = useState(0);

  useEffect(() => {
    const getItem = localStorage.getItem("id");
    if (getItem) {
      const idsArray = JSON.parse(getItem);
      const count = idsArray.length;
      setStoredIdsCount(count);
    } else {
      setStoredIdsCount(0);
    }
  });


  
  return (
    <div className="hidden sm:flex sm:py-3 py-2 px-4 font-sans sm:justify-between">
      <div className="hidden sm:flex">
        <Img src="/public/static/images/tkp-logo.png" className="xl:w-44 sm:w-15" />
      </div>
      <div className="py-1.5 rounded-md hover:bg-slate-200 text-center text-slate-800 hidden sm:flex">
        <Button className={"px-2"}>Kategori</Button>
      </div>
      <div className="flex rounded-lg border border-slate-400 sm:w-[640px] w-[550px] h-[40px]">
        <Search className="self-center justify-center sm:w-14 w-5 text-slate-400 mx-2 " />
        <Input
          placeholder={"Cari Di Tokepedia"}
          className={
            "w-full placeholder:text-left active:border-none focus:outline-none"
          }
        ></Input>
      </div>
    
      <div className="self-center w-[15%] items-center  flex justify-evenly text-slate-700 ">
        <NavLink to="/buy" className="flex relative justify-between ">
          <ShoppingCart />
          {storedIdsCount ? (
            <div className="absolute -top-2 -right-1 bg-[#00aa5b] text-white text-xs w-5 h-5 rounded-full flex justify-center items-center translate-y-5 translate-x-2">
              {storedIdsCount}
            </div>
          ) : null}
        </NavLink>
        <Mail />
        <Bell />
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

NavbarMiddle.propTypes = {
  onClick: propsTypes.func,
};

export default NavbarMiddle;
