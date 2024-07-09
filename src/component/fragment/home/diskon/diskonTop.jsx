import { NavLink } from "react-router-dom";
import DiskonTimer from "../../../element/diskonTimer";
import { ArrowRight } from "lucide-react";
const DiskonTop = () => {
  return (
    <div className="flex p-2 justify-start gap-2 py-4 font-sans">
      <div className="font-bold sm:text-2xl self-end w-full sm:w-auto">
        <p className="text-xl">Kejar Diskon Spesial</p>
        <div className="font-normal flex sm:hidden gap-2 mt-1">
          <p>Berakhir Dalam</p>
          <DiskonTimer className="text-sm rounded-xl " />
        </div>
      </div>
      <div className="flex sm:hidden items-center relative">
        <NavLink to={"/"} className=" w-8 h-8 flex justify-center items-center rounded-full border border-slate-300"> 
          <ArrowRight className="text-slate-700"/>
        </NavLink>
      </div>
      <div className="text-slate-400 self-end hidden sm:flex">
        Berakhir Dalam
      </div>
      <div className="hidden sm:flex">
        <DiskonTimer />
      </div>
      <NavLink
        to={"/"}
        className="text-[#00aa5b] font-bold self-end hidden sm:flex"
      >
        Lihat Semua
      </NavLink>
    </div>
  );
};

export default DiskonTop;
