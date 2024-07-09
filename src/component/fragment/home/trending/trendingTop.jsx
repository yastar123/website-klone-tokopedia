import { RotateCw } from "lucide-react";
import { NavLink } from "react-router-dom";
const TrendingTop = () => {
  return (
    <div className="flex gap-2 font-sans self-end items-end mb-1">
      <p className="font-bold text-xl">Lagi trending, nih</p>
      <NavLink>
        <RotateCw className="text-[#00aa5b]" width={20} />
      </NavLink>
      <p className="text-[#00aa5b] font-semibold" >Muat Lainnya</p>
    </div>
  );
};

export default TrendingTop;
