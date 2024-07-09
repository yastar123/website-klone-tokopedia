import Img from "./img";
import Button from "./button";
import { NavLink } from "react-router-dom";
const User = () => {
  return (
    <div className="flex sm:hidden justify-between mt-2 px-4">
      <div className="flex">
        <div className="pr-3">
          <Img src="/public/image/user.png" />
        </div>
        <div>
          <p className="font-bold text-sm">Hai, Topper!</p>
          <p className="text-slate-400 text-xs">Akses semua fitur, yuk~</p>
        </div>
      </div>
      <div>
        <NavLink to={"/"} className="py-1">
          <Button
            className={
              "bg-[#00aa5b] text-white font-bold rounded-lg h-full px-6 -tracking-wider hover:bg-white hover:text-[#00aa5b] hover:border hover:border-[#00aa5b] "
            }
          >
            Masuk
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default User;
